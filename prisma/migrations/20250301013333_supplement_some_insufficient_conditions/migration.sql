/*
  Warnings:

  - Added the required column `image_public_id` to the `portfolio_prominent_project_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolio_prominent_project_images" ADD COLUMN     "image_public_id" TEXT NOT NULL;
