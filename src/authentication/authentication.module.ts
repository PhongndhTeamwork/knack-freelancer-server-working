import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { PrismaService } from "@prisma/prisma.service";

@Module({
  imports: [],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, PrismaService]
})
export class AuthenticationModule {
}
