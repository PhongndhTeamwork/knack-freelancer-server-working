/*
  Warnings:

  - You are about to drop the column `skills` on the `portfolios` table. All the data in the column will be lost.
  - You are about to drop the `feedbacks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `portfolios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolios" DROP COLUMN "skills",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "skill_description" TEXT;

-- DropTable
DROP TABLE "feedbacks";

-- CreateTable
CREATE TABLE "portfolio_prominent_projects" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "detail" TEXT,
    "from" TIMESTAMPTZ NOT NULL,
    "to" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_prominent_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_prominent_project_images" (
    "id" SERIAL NOT NULL,
    "portfolioProminentProjectId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_prominent_project_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_customer_feedbacks" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_customer_feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_about_sections" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER,
    "avatar" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_about_sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_work_experiences" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "from" TIMESTAMPTZ NOT NULL,
    "to" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_work_experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio_skills" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "portfolio_skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "portfolio_about_sections_portfolioId_key" ON "portfolio_about_sections"("portfolioId");

-- AddForeignKey
ALTER TABLE "portfolio_prominent_projects" ADD CONSTRAINT "portfolio_prominent_projects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_prominent_project_images" ADD CONSTRAINT "portfolio_prominent_project_images_portfolioProminentProje_fkey" FOREIGN KEY ("portfolioProminentProjectId") REFERENCES "portfolio_prominent_projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_customer_feedbacks" ADD CONSTRAINT "portfolio_customer_feedbacks_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_about_sections" ADD CONSTRAINT "portfolio_about_sections_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_work_experiences" ADD CONSTRAINT "portfolio_work_experiences_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolio_skills" ADD CONSTRAINT "portfolio_skills_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
