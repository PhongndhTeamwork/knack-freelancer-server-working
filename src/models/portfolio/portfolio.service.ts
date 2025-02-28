import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "@prisma/prisma.service";

@Injectable()
export class PortfolioService {
    constructor(private readonly prisma : PrismaService) {
    }

    async createNewPortfolio(userId : number) {
        try {
            return await this.prisma.portfolio.create({
                data: {
                    userId: userId
                },
            });
        }catch (err) {
            return new BadRequestException(err?.message)
        }

    }
}
