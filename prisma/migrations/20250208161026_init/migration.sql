/*
  Warnings:

  - You are about to drop the column `fullname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profiles" DROP CONSTRAINT "profiles_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "fullname",
DROP COLUMN "username",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "facebook_link" TEXT,
ADD COLUMN     "instagram_link" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "tiktok_link" TEXT,
ADD COLUMN     "youtube_link" TEXT;

-- DropTable
DROP TABLE "profiles";
