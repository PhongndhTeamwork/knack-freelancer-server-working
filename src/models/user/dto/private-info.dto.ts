import {
  IsString,
  IsOptional,
  IsArray,
  IsNotEmpty,
  IsObject
} from "class-validator";

export class PrivateInfoDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsObject() // File type validation depends on your implementation
  mainImage?: Express.Multer.File;


  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  seoKey: string[];

  @IsString()
  referenceUrl: string;

  // @IsArray()
  // @ValidateNested({ each: true })
  // @Type(() => ParagraphDto)
  // paragraphs: ParagraphDto[];
}

