import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserService } from "@model/user/user.service";
import { CompleteSignupInfoDto } from "@authentication/dto/complete-signup-info.dto";
import { Request } from "express";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";

@Controller("auth")
@ApiTags("Authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {
  }

  @Post("login")
  async login(@Body() { credential }: { credential: string }) {
    const result = await this.authenticationService.login(credential);
    if (result instanceof HttpException) {
      throw result;
    }
    return result;
  }


  @Post("complete-signup-info")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async completeSignupInfo(@Body() body : CompleteSignupInfoDto, @Req() req: Request) {
    const user: any = req.user;
    const result = await this.authenticationService.fillInformation(+user.id, body);
    if (result instanceof HttpException) {
      throw result;
    }
    return result;
  }

}
