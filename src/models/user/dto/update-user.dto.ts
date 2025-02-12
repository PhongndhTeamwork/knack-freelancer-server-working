import { IsNumber, IsObject, IsOptional, IsString, ValidateIf } from "class-validator";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @ValidateIf((o) => typeof o.avatar === 'string')
  @IsObject()
  @IsOptional()
  avatar: Express.Multer.File | string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsNumber()
  @IsOptional()
  gender: number;

  @IsString()
  @IsOptional()
  email: string

  @IsString()
  @IsOptional()
  biography: string

  @IsString()
  @IsOptional()
  address: string

  @IsString()
  @IsOptional()
  occupation: string

  @IsString()
  @IsOptional()
  facebookLink: string

  @IsString()
  @IsOptional()
  instagramLink: string

  @IsString()
  @IsOptional()
  youtubeLink: string

  @IsString()
  @IsOptional()
  tiktokLink: string
}