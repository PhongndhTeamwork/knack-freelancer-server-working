import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CloudinaryService } from "@cloudinary/cloudinary.service";
import { CloudinaryResponse } from "@type/cloudinary.type";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";
import { CreateAchievementDto } from "./dto/create-achievement.dto";
import { UpdateAchievementDto } from "./dto/update-achievement.dto";
import { CreateProminentWorkDto } from "./dto/create-prominent-work.dto";
import { UpdateProminentWorkDto } from "./dto/update-prominent-work.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {

  }

  async getProfile(id: number) {
    try {
      return await this.prisma.user.findFirst({
        where: { id: id },
        include: {
          profileWorkExperiences: { orderBy: { id: "asc" } },
          profileAchievements: { orderBy: { id: "asc" } },
          profileProminentWorks: { orderBy: { id: "asc" } }
        }
      });
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  async getFeedback(userId : number) {
    try {
      const user = await this.prisma.user.findUnique({
        where : {id : userId},
        include : {
          portfolios : {
            include : {
              portfolioCustomerFeedbacks : true
            }
          }
        }
      });
      return user.portfolios ? user.portfolios?.[0]?.portfolioCustomerFeedbacks[0] || null : null;
    } catch (e) {
      new BadRequestException(e?.message);
    }
  }


  async updateProfile(userId: number, updateUserDto: UpdateUserDto) {
    try {
      let avatar: CloudinaryResponse;
      let avatarPublicId: string;
      if (updateUserDto.avatar && typeof updateUserDto.avatar !== "string") {
        avatarPublicId = (await this.prisma.user.findFirst({ where: { id: userId } })).avatarPublicId;
        avatar = await this.cloudinaryService.uploadFile(updateUserDto.avatar, "knack/users/avatar", "image");
      }

      const newUser = await this.prisma.user.update({
        where: { id: userId },
        data: {
          name: updateUserDto.name,
          ...(updateUserDto.avatar && { avatar: avatar.secure_url, avatarPublicId: avatar.public_id }),
          phone: updateUserDto.phone,
          gender: +updateUserDto.gender,
          email: updateUserDto.email,
          biography: updateUserDto.biography,
          address: updateUserDto.address,
          occupation: updateUserDto.occupation,
          facebookLink: updateUserDto.facebookLink,
          instagramLink: updateUserDto.instagramLink,
          youtubeLink: updateUserDto.youtubeLink,
          tiktokLink: updateUserDto.tiktokLink
        }
      });

      if (updateUserDto.avatar && typeof updateUserDto.avatar !== "string" && avatarPublicId) {
        const removeResult = await this.cloudinaryService.removeFile(avatarPublicId);
        if (!removeResult) {
          return new BadRequestException("Can not remove old avatar");
        }
      }
      return newUser;
    } catch (error) {
      console.log(error);
      return new BadRequestException(error?.message);
    }
  }

  //* USER'S WORK EXPERIENCE
  async createWorkExperience(userId: number, createWorkExperienceDto: CreateWorkExperienceDto) {
    try {
      return await this.prisma.profileWorkExperience.create({
        data: {
          userId: userId,
          name: createWorkExperienceDto.name,
          description: createWorkExperienceDto.description,
          from: new Date(createWorkExperienceDto.from),
          to: createWorkExperienceDto.to !== "" ? new Date(createWorkExperienceDto.to) : null
        }
      });
    } catch (error) {
      console.error(error.message);
      return new BadRequestException(error?.message);
    }
  }

  async updateWorkExperience(userId: number, id: number, updateWorkExperienceDto: UpdateWorkExperienceDto) {
    try {
      return await this.prisma.profileWorkExperience.update({
        where: {
          userId: userId,
          id: id
        },
        data: {
          name: updateWorkExperienceDto.name,
          description: updateWorkExperienceDto.description,
          from: new Date(updateWorkExperienceDto.from),
          to: updateWorkExperienceDto.to !== "" ? new Date(updateWorkExperienceDto.to) : null
        }
      });
    } catch (error) {
      console.error(error.message);
      return new BadRequestException(error?.message);
    }
  }

  async deleteWorkExperience(userId: number, id: number) {
    try {
      await this.prisma.profileWorkExperience.delete({
        where: {
          userId: userId,
          id: id
        }
      });

      return "Successfully deleted!";
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  //* ACHIEVEMENTS
  async createAchievement(userId: number, createAchievementDto: CreateAchievementDto) {
    try {
      const achievement = await this.prisma.profileAchievement.create({
        data: {
          userId: userId,
          name: createAchievementDto.name,
          description: createAchievementDto.description,
          from: new Date(createAchievementDto.from),
          to: createAchievementDto.to !== "" ? new Date(createAchievementDto.to) : null,
          wage: +createAchievementDto.wage
        }
      });

      return achievement;
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  async updateAchievement(userId: number, id: number, updateAchievementDto: UpdateAchievementDto) {
    try {
      const achievement = await this.prisma.profileAchievement.update({
        where: {
          userId: userId,
          id: id
        },
        data: {
          name: updateAchievementDto.name,
          description: updateAchievementDto.description,
          from: new Date(updateAchievementDto.from),
          to: updateAchievementDto.to !== "" ? new Date(updateAchievementDto.to) : null,
          wage: +updateAchievementDto.wage
        }
      });

      return achievement;
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  async deleteAchievement(userId: number, id: number) {
    try {
      await this.prisma.profileAchievement.delete({
        where: {
          userId: userId,
          id: id
        }
      });

      return "Successfully deleted!";
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  //* PROMINENT WORK
  async createProminentWork(userId: number, createProminentWorkDto: CreateProminentWorkDto) {
    try {
      const prominentWork = await this.prisma.profileProminentWork.create({
        data: {
          userId: userId,
          name: createProminentWorkDto.name,
          description: createProminentWorkDto.description,
          from: new Date(createProminentWorkDto.from),
          to: createProminentWorkDto.to !== "" ? new Date(createProminentWorkDto.to) : null
        }
      });

      return prominentWork;
    } catch (error) {
      console.log(error);
      return new BadRequestException(error?.message);
    }
  }

  async updateProminentWork(userId: number, id: number, updateProminentWorkDto: UpdateProminentWorkDto) {
    try {
      const prominentWork = await this.prisma.profileProminentWork.update({
        where: {
          userId: userId,
          id: id
        },
        data: {
          name: updateProminentWorkDto.name,
          description: updateProminentWorkDto.description,
          from: new Date(updateProminentWorkDto.from),
          to: updateProminentWorkDto.to !== "" ? new Date(updateProminentWorkDto.to) : null
        }
      });

      return prominentWork;
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }

  async deleteProminentWork(userId: number, id: number) {
    try {
      await this.prisma.profileProminentWork.delete({
        where: {
          userId: userId,
          id: id
        }
      });

      return "Successfully deleted!";
    } catch (error) {
      return new BadRequestException(error?.message);
    }
  }
}
