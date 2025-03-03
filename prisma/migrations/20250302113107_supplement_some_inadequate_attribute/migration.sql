/*
  Warnings:

  - You are about to drop the `portfolio_about_sections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "portfolio_about_sections" DROP CONSTRAINT "portfolio_about_sections_portfolioId_fkey";

-- AlterTable
ALTER TABLE "portfolios" ADD COLUMN     "avatar" TEXT,
ADD COLUMN     "detail" TEXT,
ADD COLUMN     "overview" TEXT;

-- DropTable
DROP TABLE "portfolio_about_sections";
