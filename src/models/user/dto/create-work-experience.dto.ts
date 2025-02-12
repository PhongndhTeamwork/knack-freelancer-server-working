import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateWorkExperienceDto{
  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  from: string

  @IsOptional()
  @IsString()
  to: string
}