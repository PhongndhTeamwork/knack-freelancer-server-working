import { Body, Controller, Delete, Get, HttpException, Param, Post, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";
import { Request } from "express";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateWorkExperienceDto } from "./dto/create-work-experience.dto";
import { UpdateWorkExperienceDto } from "./dto/update-work-experience.dto";
import { CreateAchievementDto } from "./dto/create-achievement.dto";
import { UpdateAchievementDto } from "./dto/update-achievement.dto";
import { CreateProminentWorkDto } from "./dto/create-prominent-work.dto";
import { UpdateProminentWorkDto } from "./dto/update-prominent-work.dto";


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

  @Get("feedback")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getFeedback(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.userService.getFeedback(+user?.id);
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

  //* WORK EXPERIENCE
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

  @Delete("delete-work-experience/:workExperienceId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteWorkExperience(
    @Req() req: Request,
    @Param("workExperienceId") workExperienceId: number
  ) {
    const user: any = req.user
    const result = await this.userService.deleteWorkExperience(+user?.id, +workExperienceId)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  //* ACHIEVEMENTS
  @Post("create-achievement")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createAchievement(
    @Req() req: Request,
    @Body() body: CreateAchievementDto
  ) {
    const user: any = req.user
    const result = await this.userService.createAchievement(+user?.id, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  @Put("update-achievement/:achievementId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateAchievement(
    @Req() req: Request,
    @Param("achievementId") achievementId: number,
    @Body() body: UpdateAchievementDto
  ) {
    const user: any = req.user
    const result = await this.userService.updateAchievement(+user?.id, +achievementId, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  @Delete("delete-achievement/:achievementId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteAchievement(
    @Req() req: Request,
    @Param("achievementId") achievementId: number
  ) {
    const user: any = req.user
    const result = await this.userService.deleteAchievement(+user?.id, +achievementId)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  //* PROMINENT WORK
  @Post("create-prominent-work")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createProminentWork(
    @Req() req: Request,
    @Body() body: CreateProminentWorkDto
  ) {
    const user: any = req.user
    const result = await this.userService.createProminentWork(+user?.id, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  @Put("update-prominent-work/:prominentWorkId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async updateProminentWork(
    @Req() req: Request,
    @Param("prominentWorkId") prominentWorkId: number,
    @Body() body: UpdateProminentWorkDto
  ) {
    const user: any = req.user
    const result = await this.userService.updateProminentWork(+user?.id, +prominentWorkId, body)
    if (result instanceof HttpException) {
      throw result
    }
    return result
  }

  @Delete("delete-prominent-work/:prominentWorkId")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async deleteProminentWork(
    @Req() req: Request,
    @Param("prominentWorkId") prominentWorkId: number
  ) {
    const user: any = req.user
    const result = await this.userService.deleteProminentWork(+user?.id, +prominentWorkId)
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
