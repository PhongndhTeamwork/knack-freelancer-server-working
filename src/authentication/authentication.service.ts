import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "@prisma/prisma.service";


@Injectable()
export class AuthenticationService {
  constructor(private readonly jwtService: JwtService, private readonly prisma: PrismaService) {

  }

  async signupByUsername(){

  }
}
