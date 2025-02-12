import { Body, Controller, Get, HttpException, Param, Post, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";
import { Request } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";


@Controller("user")
@ApiTags("User")
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getProfile(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.userService.getProfile(+user?.id);
    if (result instanceof HttpException) {
      throw result;
    }
    return result;
  }

  @Put("update-profile")
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor("avatar"))
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        avatar: {
          type: "string",
          format: "binary"
        }
      }
    }
  })
  @ApiBearerAuth()
  async updateProfile(
    @Req() req: Request,
    @Body() body: UpdateUserDto
  ) {
    const user: any = req.user
    body.avatar = req.file

    const result = await this.userService.updateProfile(+user?.id, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  //! WORK EXPERIENCE
  @Post("create-work-experience")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createWorkExperience(
    @Req() req: Request,
    @Body() body: CreateWorkExperienceDto
  ) {
    const user: any = req.user
    const result = await this.userService.createWorkExperience(+user?.id, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  @Put("update-work-experience/:workExperienceId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateWorkExperience(
    @Req() req: Request,
    @Param("workExperienceId") workExperienceId: number,
    @Body() body: UpdateWorkExperienceDto
  ) {
    const user: any = req.user
    const result = await this.userService.updateWorkExperience(+user?.id, +workExperienceId, body)
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
