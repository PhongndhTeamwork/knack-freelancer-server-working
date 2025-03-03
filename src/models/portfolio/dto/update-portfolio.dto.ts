import {  IsOptional, IsString } from "class-validator";

export class UpdatePortfolioDto{
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  skillDescription: string

  @IsOptional()
  avatar : Express.Multer.File

  @IsOptional()
  @IsString()
  overview: string

  @IsString()
  @IsOptional()
  detail: string

}