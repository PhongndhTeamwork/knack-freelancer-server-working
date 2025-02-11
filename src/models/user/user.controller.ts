import { Body, Controller, Get, HttpException, Post, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";
import { Request } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.userService.getProfile(+user?.id);
    if (result instanceof HttpException) {
      throw result;
    }
    return result;
  }

  @Post("update-profile")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("avatar"))
  async updateProfile(@Req() req: Request, @Body() body: UpdateUserDto) {
    const user: any = req.user
    body.avatar = req.file

    const result = await this.userService.updateProfile(+user?.id, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }
  // @Post("update-private-info")
  // @UseGuards(JwtAuthGuard, RoleGuard)
  // @Roles([Role.Freelancer])
  // async updatePrivateInfo(@Req() req: Request, @Body() updateInfo: PrivateInfoDto) {

  // }
}
