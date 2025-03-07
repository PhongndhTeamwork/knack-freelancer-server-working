-- AlterTable
ALTER TABLE "users" ADD COLUMN     "service_price_link" TEXT;

-- CreateTable
CREATE TABLE "profile_service_prices" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "fieldName" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_service_prices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile_services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "profileServicePriceId" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profile_services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "profile_service_prices" ADD CONSTRAINT "profile_service_prices_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile_services" ADD CONSTRAINT "profile_services_profileServicePriceId_fkey" FOREIGN KEY ("profileServicePriceId") REFERENCES "profile_service_prices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
