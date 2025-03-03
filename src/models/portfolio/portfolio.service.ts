import { BadRequestException, ForbiddenException, HttpException, Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { CreatePortfolioProminentWorkDto } from "@model/portfolio/dto/create-portfolio-prominent-work.dto";
import { CloudinaryService } from "@cloudinary/cloudinary.service";
import { UpdatePortfolioProminentWorkDto } from "@model/portfolio/dto/update-portfolio-prominent-work.dto";
import { CreatePortfolioFeedbackDto } from "@model/portfolio/dto/create-portfolio-feedback.dto";
import { UpdatePortfolioDto } from "@model/portfolio/dto/update-portfolio.dto";
import { CloudinaryResponse } from "@type/cloudinary.type";
import { CreatePortfolioWorkExperienceDto } from "@model/portfolio/dto/create-portfolio-work-experience.dto";
import { UpdatePortfolioWorkExperienceDto } from "@model/portfolio/dto/update-portfolio-work-experience.dto";
import { CreatePortfolioSkillDto } from "@model/portfolio/dto/create-portfolio-skill.dto";
import { UpdatePortfolioSkillDto } from "@model/portfolio/dto/update-portfolio-skill.dto";
import { UpdatePortfolioFeedbackDto } from "@model/portfolio/dto/update-portfolio-feedback.dto";

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService,
              private readonly cloudinaryService: CloudinaryService
  ) {
  }

  async getAllPortfolios(userId: number) {
    try {
      return await this.prisma.portfolio.findMany({
        where: {
          userId: userId
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }

  }

  async createPortfolio(userId: number) {
    try {
      return await this.prisma.portfolio.create({
        data: {
          userId: userId
        }
      });
    } catch (err) {
      console.log(err);
      return new BadRequestException(err?.message);
    }

  }

  async updatePortfolio(userId: number, portfolioId: number, body: UpdatePortfolioDto) {
    const { detail, skillDescription, name, overview } = body;
    try {
      //* Delete old avatar
      const portfolio = await this.prisma.portfolio.findFirst({
        where: { id: portfolioId, userId }
      });
      if (!portfolio) return new NotFoundException("Cannot find portfolio");
      let uploadedAvatar: CloudinaryResponse | null = null;
      if (body.avatar) {
        if (body.avatar?.size === 0) {
          await this.prisma.portfolio.update(
            {
              where: { id: portfolioId, userId: userId },
              data: { avatar: null, avatarPublicId: null }
            }
          );
        } else {
          if (portfolio.avatar && portfolio.avatarPublicId) {
            const removeResult = await this.cloudinaryService.removeFile(portfolio.avatarPublicId);
            if (removeResult instanceof HttpException) return removeResult;
          }
          uploadedAvatar = await this.cloudinaryService.uploadFile(body.avatar, "knack/portfolio/avatar", "image");
        }
      }

      //* Update portfolio
      await this.prisma.portfolio.update({
        where: {
          userId: userId,
          id: portfolioId
        },
        data: {
          ...(uploadedAvatar && {
            avatar: uploadedAvatar.secure_url,
            avatarPublicId: uploadedAvatar.public_id
          }),
          ...(name && name !== "" && { name }),
          ...(detail && detail !== "" && { detail }),
          ...(skillDescription && skillDescription !== "" && { skillDescription }),
          ...(overview && overview !== "" && { overview })
        }
      });
      return { message: "Portfolio updated successfully" };
    } catch (err) {
      console.log(err);
      return new BadRequestException(err?.message);
    }
  }

  async getPortfolioDetail(userId: number, portfolioId: number) {
    try {
      const portfolio = await this.prisma.portfolio.findUnique({
        where: {
          userId: userId,
          id: portfolioId
        },
        include: {
          portfolioSkills: {
            orderBy: { id: "asc" }
          },
          portfolioCustomerFeedbacks: {
            orderBy: { id: "asc" }
          },
          portfolioWorkExperiences: {
            orderBy: { id: "asc" }
          },
          portfolioProminentProjects: {
            include: {
              images: {
                select: { image: true, id: true }
              }
            }
          }
        }
      });
      if (!portfolio) {
        return new NotFoundException("Portfolio not found");
      }
      return portfolio;
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async createPortfolioProminentWork(userId: number, portfolioId: number, body: CreatePortfolioProminentWorkDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      //* Upload image to Cloudinary
      const newImages = Array.isArray(body.images) ? body.images : body.images ? [body.images] : [];
      const uploadedImages = await Promise.all(
        newImages.map(async (image) => {
          const uploadedImage = await this.cloudinaryService.uploadFile(image, "knack/portfolio/prominent-project", "image");
          return { secureUrl: uploadedImage.secure_url, publicId: uploadedImage.public_id };
        })
      );

      //* Create New Prominent Work
      await this.prisma.$transaction(async (transactionPrisma) => {
        // Create new prominent Project
        const newProject = await transactionPrisma.portfolioProminentProject.create({
          data: {
            portfolioId: portfolioId,
            role: body.role,
            description: body.description,
            from: body.from,
            to: body.to && body.to !== "" ? new Date(body.to) : null,
            name: body.name,
            detail: body.detail,
            company: body.company
          }
        });
        // Create image
        for (const image of uploadedImages) {
          await transactionPrisma.portfolioProminentProjectImage.create({
            data: {
              portfolioProminentProjectId: newProject.id,
              image: image.secureUrl,
              imagePublicId: image.publicId
            }
          });
        }
      });
      return "Created successfully";
    } catch (err) {
      console.log(err);
      return new BadRequestException(err?.message);
    }
  }

  async updatePortfolioProminentWork(userId: number, portfolioId: number, prominentProjectId: number, body: UpdatePortfolioProminentWorkDto) {
    if (!portfolioId || !prominentProjectId) return new BadRequestException("Please pass enough params");
    try {
      //* Check portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      //* Check project belongs to portfolio not
      const project = await this.prisma.portfolioProminentProject.findUnique({
        where: {
          portfolioId: portfolioId,
          id: prominentProjectId
        }
      });
      if (!project) return new ForbiddenException("This project does not belong to this portfolio");


      //* Upload image to Cloudinary
      const newImages = Array.isArray(body.images) ? body.images : body.images ? [body.images] : [];
      const uploadedImages = await Promise.all(
        newImages.map(async (image) => {
          const uploadedImage = await this.cloudinaryService.uploadFile(image, "knack/portfolio/prominent-project", "image");
          return { secureUrl: uploadedImage.secure_url, publicId: uploadedImage.public_id };
        })
      );

      await this.prisma.$transaction(async (transactionPrisma) => {
        //* Create new prominent Project
        const newProject = await transactionPrisma.portfolioProminentProject.update({
          data: {
            portfolioId: portfolioId,
            role: body.role,
            description: body.description,
            from: body.from,
            to: body.to && body.to !== "" ? new Date(body.to) : null,
            name: body.name,
            detail: body.detail,
            company: body.company
          },
          where: {
            id: prominentProjectId
          }
        });
        //* Create image
        await transactionPrisma.portfolioProminentProjectImage.createMany({
          data: uploadedImages.map(ui => ({
            portfolioProminentProjectId: newProject.id,
            image: ui.secureUrl,
            imagePublicId: ui.publicId
          }))
        });

        //* Delete image
        const trashImages = Array.isArray(body.trashImages) ? body.trashImages.map(e => +e) : body.trashImages ? [body.trashImages] : [];
        await transactionPrisma.portfolioProminentProjectImage.deleteMany({
          where: {
            id: {
              in: body.trashImages ? [...trashImages] : []
            }
          }
        });
      });
      return "Update successfully";
    } catch (err) {
      console.log(err);
      return new BadRequestException(err?.message);
    }
  }

  async deletePortfolioProminentWork(userId: number, portfolioId: number, prominentProjectId: number) {
    try {
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      //* Check project belongs to portfolio not
      const project = await this.prisma.portfolioProminentProject.findUnique({
        where: {
          portfolioId: portfolioId,
          id: prominentProjectId
        }
      });

      if (!project) return new ForbiddenException("This project does not belong to this portfolio");

      await this.prisma.$transaction(async (transactionPrisma) => {
        await transactionPrisma.portfolioProminentProjectImage.deleteMany({
          where: { portfolioProminentProjectId: prominentProjectId }
        });
        await transactionPrisma.portfolioProminentProject.delete({
          where: { id: prominentProjectId }
        });
      });
      return "Deleted successfully";
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async createPortfolioFeedback(userId: number, portfolioId: number, body: CreatePortfolioFeedbackDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioCustomerFeedback.create({
        data: {
          portfolioId: portfolioId,
          comment: body.comment,
          companyName: body.companyName,
          customerPosition: body.customerPosition,
          customerName: body.customerName,
          star: +body.star
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async updatePortfolioFeedback(userId: number, portfolioId: number, feedbackId: number, body: UpdatePortfolioFeedbackDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioCustomerFeedback.update({
        where: {
          id: feedbackId,
          portfolioId
        },
        data: {
          comment: body.comment,
          companyName: body.companyName,
          customerPosition: body.customerPosition,
          customerName: body.customerName,
          star: +body.star
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async deleteFeedback(userId: number, portfolioId: number, feedbackId: number) {
    try {
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioCustomerFeedback.delete({
        where: {
          id: feedbackId,
          portfolioId
        }
      });
      return "Deleted successfully";
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async createPortfolioWorkExperience(userId: number, portfolioId: number, body: CreatePortfolioWorkExperienceDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioWorkExperience.create({
        data: {
          portfolioId: portfolioId,
          role: body.role,
          company: body.company,
          from: body.from,
          to: body.to && body.to !== "" ? new Date(body.to) : null
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async updatePortfolioWorkExperience(userId: number, portfolioId: number, workExperienceId: number, body: UpdatePortfolioWorkExperienceDto) {
    if (!portfolioId || !workExperienceId) return new BadRequestException("Please pass enough params");
    try {
      //* Check portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      //*
      await this.prisma.portfolioWorkExperience.update({
        where: {
          id: workExperienceId,
          portfolioId: portfolioId
        },
        data: {
          role: body.role,
          company: body.company,
          from: body.from,
          to: body.to && body.to !== "" ? new Date(body.to) : null
        }
      });

      return "Update successfully";
    } catch (err) {
      console.log(err);
      return new BadRequestException(err?.message);
    }
  }

  async deletePortfolioWorkExperience(userId: number, portfolioId: number, workExperienceId: number) {
    try {
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioWorkExperience.delete({
        where: {
          id: workExperienceId,
          portfolioId
        }
      });
      return "Deleted successfully";
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async createPortfolioSkill(userId: number, portfolioId: number, body: CreatePortfolioSkillDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioSkill.create({
        data: {
          portfolioId: portfolioId,
          name : body.name
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async updatePortfolioSkill(userId: number, portfolioId: number, skillId: number, body: UpdatePortfolioSkillDto) {
    try {
      //* Check Portfolio belongs to user or not
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioSkill.update({
        where: {
          id: skillId,
          portfolioId
        },
        data: {
          name : body.name
        }
      });
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }

  async deletePortfolioSkill(userId: number, portfolioId: number, skillId: number) {
    try {
      const check = await this.checkPortfolioIsBelongsToUser(userId, portfolioId);
      if (check instanceof HttpException) return check;

      await this.prisma.portfolioSkill.delete({
        where: {
          id: skillId,
          portfolioId
        }
      });
      return "Deleted successfully";
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }


  private async checkPortfolioIsBelongsToUser(userId: number, portfolioId: number) {
    try {
      const portfolio = await this.prisma.portfolio.findUnique({
        where: {
          userId: userId,
          id: portfolioId
        }
      });
      if (!portfolio) return new ForbiddenException("This is not your portfolio");
      return true;
    } catch (err) {
      return new BadRequestException(err?.message);
    }
  }
}
