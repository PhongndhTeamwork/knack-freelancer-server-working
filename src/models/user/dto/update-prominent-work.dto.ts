import { IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateProminentWorkDto {
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