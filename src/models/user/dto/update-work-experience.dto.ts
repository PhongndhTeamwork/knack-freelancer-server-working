import { Type } from "class-transformer"
import { IsDate, IsOptional, IsString } from "class-validator"

export class UpdateWorkExperienceDto {
  @IsOptional()
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