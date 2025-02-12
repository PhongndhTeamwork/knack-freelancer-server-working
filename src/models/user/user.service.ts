import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CloudinaryService } from "@cloudinary/cloudinary.service";
import { CloudinaryResponse } from "@type/cloudinary.type";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {

  }

  //! USER'S PROFILE
  async getProfile(id: number) {
    try {
      return await this.prisma.user.findFirst({
        where: { id: id },
        include: {
          profileWorkExperiences: true,
          profileAchievements: true, profileProminentWorks: true
        }
      })
    } catch (error) {
      return new BadRequestException(error?.message)
    }
  }

  async updateProfile(userId: number, updateUserDto: UpdateUserDto) {
    try {
      let avatar: CloudinaryResponse
      if (updateUserDto.avatar && typeof updateUserDto.avatar !== 'string') {
        avatar = await this.cloudinaryService.uploadFile(updateUserDto.avatar, "knack/users/avatar", "image")
      }

      await this.prisma.user.update({
        where: { id: userId },
        data: {
          name: updateUserDto.name,
          ...(updateUserDto.avatar && { avatar: avatar.secure_url }),
          phone: updateUserDto.phone,
          gender: updateUserDto.gender,
          email: updateUserDto.email,
          biography: updateUserDto.biography,
          address: updateUserDto.address,
          occupation: updateUserDto.occupation,
          facebookLink: updateUserDto.facebookLink,
          instagramLink: updateUserDto.instagramLink,
          youtubeLink: updateUserDto.youtubeLink,
          tiktokLink: updateUserDto.tiktokLink
        }
      })

      return "Success"
    } catch (error) {
      return new BadRequestException(error?.message)
    }
  }

  //!USER'S WORK EXPERIENCE
  async createWorkExperience(userId: number, createWorkExperienceDto: CreateWorkExperienceDto) {
    try {
      const workExperience = await this.prisma.profileWorkExperience.create({
        data: {
          userId: userId,
          name: createWorkExperienceDto.name,
          description: createWorkExperienceDto.description,
          from: new Date(createWorkExperienceDto.from),
          to: new Date(createWorkExperienceDto.to)
        },
      })
      return workExperience
    } catch (error) {
      return new BadRequestException(error?.message)
    }
  }

  async updateWorkExperience(userId: number, id: number, updateWorkExperienceDto: UpdateWorkExperienceDto) {
    try {
      const updateWorkExperience = await this.prisma.profileWorkExperience.update({
        where: {
          userId: userId,
          id: id
        },
        data: {
          name: updateWorkExperienceDto.name,
          description: updateWorkExperienceDto.description,
          from: new Date(updateWorkExperienceDto.from),
          to: new Date(updateWorkExperienceDto.to)
        }
      })

      return updateWorkExperience
    } catch (error) {
      console.error(error.message)
      return new BadRequestException(error?.message)
    }
  }
}
