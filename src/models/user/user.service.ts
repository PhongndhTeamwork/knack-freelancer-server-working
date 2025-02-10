import { BadRequestException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CloudinaryService } from "@cloudinary/cloudinary.service";
import { CloudinaryResponse } from "@type/cloudinary.type";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private readonly cloudinaryService: CloudinaryService
  ) {

  }

  async getProfile(id: number) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { id: id },
        include: { profileWorkExperiences: true, profileAchievements: true, profileProminentWorks: true }
      })
      return user
    } catch (error) {
      return new BadRequestException(error?.message)
    }
  }

  async updateProfile(id: number, updateUserDto: UpdateUserDto) {
    try {
      let avatar: CloudinaryResponse
      if (updateUserDto.avatar) {
        avatar = await this.cloudinaryService.uploadFile(updateUserDto.avatar, "knack/users/avatar", "image")
      }

      await this.prisma.user.update({
        where: { id: id },
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
    } catch (error) {
      return new BadRequestException(error?.message)
    }

  }

}
