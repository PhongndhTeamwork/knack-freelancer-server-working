import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignUpByUsernameDto } from "@authentication/dto/sign-up-by-username.dto";
import { PrismaService } from "@prisma/prisma.service";


@Injectable()
export class AuthenticationService {
  constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {

  }

  async signupByUsername(){

  }
}
