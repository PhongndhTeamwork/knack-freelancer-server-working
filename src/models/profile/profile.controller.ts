import { Controller, Get, HttpException, Req, UseGuards } from "@nestjs/common";
import { ProfileService } from "./profile.service";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";
import { Request } from "express";

@Controller("profile")
@ApiTags("Profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {

  }

  @Get("")
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.profileService.getProfile(+user?.id)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }
}