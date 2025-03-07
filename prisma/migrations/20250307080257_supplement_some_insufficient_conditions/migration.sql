/*
  Warnings:

  - You are about to drop the column `wage` on the `profile_achievements` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile_achievements" DROP COLUMN "wage";

-- AlterTable
ALTER TABLE "profile_prominent_works" ADD COLUMN     "wage" INTEGER;
