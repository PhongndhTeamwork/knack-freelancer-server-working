/*
  Warnings:

  - You are about to drop the column `portfolioId` on the `portfolio_customer_feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioProminentProjectId` on the `portfolio_prominent_project_images` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `portfolio_prominent_projects` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `portfolio_skills` table. All the data in the column will be lost.
  - You are about to drop the column `portfolioId` on the `portfolio_work_experiences` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `profile_achievements` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `profile_prominent_works` table. All the data in the column will be lost.
  - You are about to drop the column `fieldName` on the `profile_service_prices` table. All the data in the column will be lost.
  - You are about to drop the column `profileServicePriceId` on the `profile_services` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `profile_work_experiences` table. All the data in the column will be lost.
  - Added the required column `portfolio_id` to the `portfolio_customer_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolio_prominent_project_id` to the `portfolio_prominent_project_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolio_id` to the `portfolio_prominent_projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolio_id` to the `portfolio_skills` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolio_id` to the `portfolio_work_experiences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profile_achievements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profile_prominent_works` table without a default value. This is not possible if the table is not empty.
  - Added the required column `field_name` to the `profile_service_prices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_service_price_id` to the `profile_services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `profile_work_experiences` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "portfolio_customer_feedbacks" DROP CONSTRAINT "portfolio_customer_feedbacks_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_prominent_project_images" DROP CONSTRAINT "portfolio_prominent_project_images_portfolioProminentProje_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_prominent_projects" DROP CONSTRAINT "portfolio_prominent_projects_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_skills" DROP CONSTRAINT "portfolio_skills_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "portfolio_work_experiences" DROP CONSTRAINT "portfolio_work_experiences_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "profile_achievements" DROP CONSTRAINT "profile_achievements_userId_fkey";

-- DropForeignKey
ALTER TABLE "profile_prominent_works" DROP CONSTRAINT "profile_prominent_works_userId_fkey";

-- DropForeignKey
ALTER TABLE "profile_services" DROP CONSTRAINT "profile_services_profileServicePriceId_fkey";

-- DropForeignKey
ALTER TABLE "profile_work_experiences" DROP CONSTRAINT "profile_work_experiences_userId_fkey";

-- AlterTable
ALTER TABLE "portfolio_customer_feedbacks" DROP COLUMN "portfolioId",
ADD COLUMN     "portfolio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "portfolio_prominent_project_images" DROP COLUMN "portfolioProminentProjectId",
ADD COLUMN     "portfolio_prominent_project_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "portfolio_prominent_projects" DROP COLUMN "portfolioId",
ADD COLUMN     "portfolio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "portfolio_skills" DROP COLUMN "portfolioId",
ADD COLUMN     "portfolio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "portfolio_work_experiences" DROP COLUMN "portfolioId",
ADD COLUMN     "portfolio_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile_achievements" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile_prominent_works" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile_service_prices" DROP COLUMN "fieldName",
ADD COLUMN     "field_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "profile_services" DROP COLUMN "profileServicePriceId",
ADD COLUMN     "profile_service_price_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile_work_experiences" DROP COLUMN "userId",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "is_show_service_price" BOOLEAN DEFAULT true;

-- AddForeignKey
ALTER TABLE "profile_work_experiences" ADD CONSTRAINT "profile_work_experiences_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_achievements" ADD CONSTRAINT "profile_achievements_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_prominent_works" ADD CONSTRAINT "profile_prominent_works_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_services" ADD CONSTRAINT "profile_services_profile_service_price_id_fkey" FOREIGN KEY ("profile_service_price_id") REFERENCES "profile_service_prices"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_prominent_projects" ADD CONSTRAINT "portfolio_prominent_projects_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_prominent_project_images" ADD CONSTRAINT "portfolio_prominent_project_images_portfolio_prominent_pro_fkey" FOREIGN KEY ("portfolio_prominent_project_id") REFERENCES "portfolio_prominent_projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_customer_feedbacks" ADD CONSTRAINT "portfolio_customer_feedbacks_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_work_experiences" ADD CONSTRAINT "portfolio_work_experiences_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_skills" ADD CONSTRAINT "portfolio_skills_portfolio_id_fkey" FOREIGN KEY ("portfolio_id") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
