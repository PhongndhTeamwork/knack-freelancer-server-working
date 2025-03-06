/*
  Warnings:

  - You are about to drop the column `wage` on the `profile_prominent_works` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "profile_achievements" ADD COLUMN     "wage" INTEGER;

-- AlterTable
ALTER TABLE "profile_prominent_works" DROP COLUMN "wage";
