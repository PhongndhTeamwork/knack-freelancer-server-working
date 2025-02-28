import { Controller, HttpException, Param, Post, Req } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { Request } from "express";


@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {
  }

  @Post("create-portfolio")
  async createPortfolio(@Req() req: Request) {
    const user : any = req.user;
    const result = await this.portfolioService.createNewPortfolio(+user?.id);
    if (result instanceof HttpException) throw result;
    return result;
  }

}
