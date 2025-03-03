/*
  Warnings:

  - Added the required column `comment` to the `portfolio_customer_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `star` to the `portfolio_customer_feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolio_customer_feedbacks" ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "company_name" TEXT,
ADD COLUMN     "customer_name" TEXT,
ADD COLUMN     "customer_position" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "star" INTEGER NOT NULL;
