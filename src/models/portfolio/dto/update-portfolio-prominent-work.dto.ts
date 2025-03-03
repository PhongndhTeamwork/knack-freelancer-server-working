import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class UpdatePortfolioProminentWorkDto{
  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsString()
  @IsNotEmpty()
  role: string

  @IsString()
  @IsNotEmpty()
  company: string


  @IsString()
  @IsNotEmpty()
  detail: string

  @IsOptional()
  images?: Express.Multer.File[];

  @IsOptional()
  trashImages?: number[];

  @IsString()
  @IsNotEmpty()
  from: string

  @IsOptional()
  @IsString()
  to: string
}