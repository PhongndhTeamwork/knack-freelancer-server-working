import {
  Body,
  Controller, Delete,
  Get,
  HttpException,
  Param, ParseIntPipe,
  Post, Put,
  Req, UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors
} from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { Request } from "express";
import { JwtAuthGuard } from "@guard/jwt-auth.guard";
import { RoleGuard } from "@guard/role.guard";
import { Roles } from "@decorator/roles.decorator";
import { Role } from "@enum/role.enum";
import { CreatePortfolioProminentWorkDto } from "@model/portfolio/dto/create-portfolio-prominent-work.dto";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { ApiConsumes } from "@nestjs/swagger";
import { UpdatePortfolioProminentWorkDto } from "@model/portfolio/dto/update-portfolio-prominent-work.dto";
import { CreatePortfolioFeedbackDto } from "@model/portfolio/dto/create-portfolio-feedback.dto";
import { UpdatePortfolioFeedbackDto } from "@model/portfolio/dto/update-portfolio-feedback.dto";
import { UpdatePortfolioDto } from "@model/portfolio/dto/update-portfolio.dto";
import { CreatePortfolioWorkExperienceDto } from "@model/portfolio/dto/create-portfolio-work-experience.dto";
import { UpdatePortfolioWorkExperienceDto } from "@model/portfolio/dto/update-portfolio-work-experience.dto";
import { CreatePortfolioSkillDto } from "@model/portfolio/dto/create-portfolio-skill.dto";
import { UpdatePortfolioSkillDto } from "@model/portfolio/dto/update-portfolio-skill.dto";


@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {
  }

  @Get("get-portfolios")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async getAllPortfolios(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.portfolioService.getAllPortfolios(+user?.id);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Post("create-portfolio")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async createPortfolio(@Req() req: Request) {
    const user: any = req.user;
    const result = await this.portfolioService.createPortfolio(+user?.id);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Put("update-portfolio/:portfolioId")
  @UseInterceptors(FileInterceptor("avatar"))
  @ApiConsumes("multipart/form-data")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async updatePortfolio(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number, @Body() body: UpdatePortfolioDto, @UploadedFile() avatar : Express.Multer.File ) {
    const user: any = req.user;
    body.avatar = avatar;
    const result = await this.portfolioService.updatePortfolio(+user?.id, portfolioId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Get("get-portfolio-detail/:id")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async getPortfolioDetail(@Req() req: Request, @Param("id", ParseIntPipe) portfolioId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.getPortfolioDetail(+user?.id, +portfolioId);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Delete("delete-portfolio/:id")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async deletePortfolio(@Req() req: Request, @Param("id", ParseIntPipe) portfolioId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.deletePortfolio(+user?.id, +portfolioId);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @UseInterceptors(FilesInterceptor("images"))
  @ApiConsumes("multipart/form-data")
  @Post("create-prominent-work/:portfolioId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async createProminentWork(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                            @Body() body: CreatePortfolioProminentWorkDto,
                            @UploadedFiles() images: Express.Multer.File[]) {
    body.images = images;
    const user: any = req.user;
    const result = await this.portfolioService.createPortfolioProminentWork(+user?.id, +portfolioId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }


  @UseInterceptors(FilesInterceptor("images"))
  @ApiConsumes("multipart/form-data")
  @Put("update-prominent-work/:portfolioId/:prominentProjectId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async updateProminentWork(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                            @Param("prominentProjectId", ParseIntPipe) prominentProjectId: number,
                            @Body() body: UpdatePortfolioProminentWorkDto,
                            @UploadedFiles() images: Express.Multer.File[]) {
    body.images = images;
    const user: any = req.user;
    const result = await this.portfolioService.updatePortfolioProminentWork(+user?.id, +portfolioId, +prominentProjectId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Delete("delete-prominent-work/:portfolioId/:prominentProjectId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async deleteProminentWork(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                            @Param("prominentProjectId", ParseIntPipe) prominentProjectId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.deletePortfolioProminentWork(+user?.id, +portfolioId, +prominentProjectId);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Post("create-feedback/:portfolioId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async createFeedback(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Body() body: CreatePortfolioFeedbackDto) {
    const user: any = req.user;
    const result = await this.portfolioService.createPortfolioFeedback(+user?.id, +portfolioId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Put("update-feedback/:portfolioId/:feedbackId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async updateFeedback(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Param("feedbackId", ParseIntPipe) feedbackId: number,
                       @Body() body: UpdatePortfolioFeedbackDto) {
    const user: any = req.user;
    const result = await this.portfolioService.updatePortfolioFeedback(+user?.id, +portfolioId, +feedbackId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Delete("delete-feedback/:portfolioId/:feedbackId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async deleteFeedback(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Param("feedbackId", ParseIntPipe) feedbackId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.deleteFeedback(+user?.id, +portfolioId, +feedbackId);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Post("create-work-experience/:portfolioId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async createWorkExperience(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Body() body: CreatePortfolioWorkExperienceDto) {
    const user: any = req.user;
    const result = await this.portfolioService.createPortfolioWorkExperience(+user?.id, +portfolioId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }


  @Put("update-work-experience/:portfolioId/:workExperienceId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async updateWorkExperience(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Param("workExperienceId", ParseIntPipe) workExperienceId: number,
                       @Body() body: UpdatePortfolioWorkExperienceDto) {
    const user: any = req.user;
    const result = await this.portfolioService.updatePortfolioWorkExperience(+user?.id, +portfolioId, +workExperienceId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Delete("delete-work-experience/:portfolioId/:workExperienceId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async deleteWorkExperience(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                       @Param("workExperienceId", ParseIntPipe) workExperienceId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.deletePortfolioWorkExperience(+user?.id, +portfolioId, +workExperienceId);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Post("create-skill/:portfolioId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async createSkill(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                             @Body() body: CreatePortfolioSkillDto) {
    const user: any = req.user;
    const result = await this.portfolioService.createPortfolioSkill(+user?.id, +portfolioId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Put("update-skill/:portfolioId/:skillId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async updateSkill(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                             @Param("skillId", ParseIntPipe) skillId: number,
                             @Body() body: UpdatePortfolioSkillDto) {
    const user: any = req.user;
    const result = await this.portfolioService.updatePortfolioSkill(+user?.id, +portfolioId, +skillId, body);
    if (result instanceof HttpException) throw result;
    return result;
  }

  @Delete("delete-skill/:portfolioId/:skillId")
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles([Role.Freelancer])
  async deleteSkill(@Req() req: Request, @Param("portfolioId", ParseIntPipe) portfolioId: number,
                             @Param("skillId", ParseIntPipe) skillId: number) {
    const user: any = req.user;
    const result = await this.portfolioService.deletePortfolioSkill(+user?.id, +portfolioId, +skillId);
    if (result instanceof HttpException) throw result;
    return result;
  }

}
