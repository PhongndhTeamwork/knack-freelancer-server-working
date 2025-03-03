import { IsArray, IsNotEmpty, IsObject, IsOptional, IsString } from "class-validator";

export class CreatePortfolioProminentWorkDto{
  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  role: string

  @IsString()
  @IsNotEmpty()
  company: string

  @IsString()
  @IsOptional()
  detail: string

  @IsOptional()
  @IsArray()
  @IsObject({ each: true })
  images?: Express.Multer.File[];

  @IsOptional()
  @IsString()
  from: string

  @IsOptional()
  @IsString()
  to: string
}