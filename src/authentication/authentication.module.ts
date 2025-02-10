import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { UserService } from "@model/user/user.service";
import { PrismaService } from "@prisma/prisma.service";
import { CloudinaryService } from "@cloudinary/cloudinary.service";

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PrismaService]
})
export class AuthenticationModule {
}
