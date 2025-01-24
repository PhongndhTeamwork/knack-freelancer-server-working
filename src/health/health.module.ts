import { Module } from "@nestjs/common";
import { HealthController } from "@health/health.controller";
import { TerminusModule } from "@nestjs/terminus";
import { PrismaService } from "@prisma/prisma.service";


@Module({
  controllers : [HealthController],
  imports :[TerminusModule],
  providers :[PrismaService]
})
export class HealthModule{}