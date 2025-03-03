/*
  Warnings:

  - Added the required column `name` to the `portfolio_prominent_projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "portfolio_prominent_projects" ADD COLUMN     "name" TEXT NOT NULL;
