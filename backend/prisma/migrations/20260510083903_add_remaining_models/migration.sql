-- CreateTable
CREATE TABLE "Stay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityId" INTEGER NOT NULL,
    "stayName" TEXT NOT NULL,
    "stayType" TEXT NOT NULL,
    "avgPricePerNight" REAL NOT NULL,
    "rating" REAL NOT NULL,
    "locationArea" TEXT NOT NULL,
    "budgetCategory" TEXT NOT NULL,
    CONSTRAINT "Stay_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Transport" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fromCityId" INTEGER NOT NULL,
    "toCityId" INTEGER NOT NULL,
    "transportType" TEXT NOT NULL,
    "estimatedCost" REAL NOT NULL,
    "estimatedDurationHours" REAL NOT NULL,
    "comfortLevel" TEXT NOT NULL,
    CONSTRAINT "Transport_fromCityId_fkey" FOREIGN KEY ("fromCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transport_toCityId_fkey" FOREIGN KEY ("toCityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FoodCost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityId" INTEGER NOT NULL,
    "budgetMealCost" REAL NOT NULL,
    "midrangeMealCost" REAL NOT NULL,
    "luxuryMealCost" REAL NOT NULL,
    "streetFoodScore" REAL NOT NULL,
    CONSTRAINT "FoodCost_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Stay_cityId_idx" ON "Stay"("cityId");

-- CreateIndex
CREATE INDEX "Transport_fromCityId_idx" ON "Transport"("fromCityId");

-- CreateIndex
CREATE INDEX "Transport_toCityId_idx" ON "Transport"("toCityId");

-- CreateIndex
CREATE INDEX "FoodCost_cityId_idx" ON "FoodCost"("cityId");
