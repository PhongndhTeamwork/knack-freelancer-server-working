import { HttpException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CloudinaryResponse } from "@type/cloudinary.type";
import { v2 as cloudinary } from "cloudinary";
import * as streamifier from "streamifier";

@Injectable()
export class CloudinaryService {
  uploadFile(file: Express.Multer.File, folder: string, resourceType: "image" | "auto" | "raw"): Promise<CloudinaryResponse> {
    try {
      return new Promise<CloudinaryResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: folder,
            resource_type: resourceType
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async removeFile(publicId: string): Promise<boolean | HttpException> {
    try {
      const result = await cloudinary.uploader.destroy(publicId);
      return result.result === 'ok';
    } catch (error) {
      return new InternalServerErrorException('Failed to remove the file.');
    }
  }
}