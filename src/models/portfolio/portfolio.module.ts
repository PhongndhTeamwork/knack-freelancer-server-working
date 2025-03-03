import { Module } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { PrismaService } from "@prisma/prisma.service";
import { CloudinaryService } from "@cloudinary/cloudinary.service";

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService, PrismaService, CloudinaryService],
})
export class PortfolioModule {}
