import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class ProfileService {
  constructor(
    private readonly prisma: PrismaService
  ){

  }

  async getProfile(userId: number){
    try {
      const profile = await this.prisma.profile.findFirst({
        where: {userId}
      })

      return profile
    } catch (error) {
      return new BadRequestException(error?.message)
    }
  }
}