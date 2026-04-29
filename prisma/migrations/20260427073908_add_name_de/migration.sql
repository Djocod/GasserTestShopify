/*
  Warnings:

  - Added the required column `nameDe` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "ref" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameDe" TEXT NOT NULL,
    "priceEur" REAL NOT NULL,
    "category" TEXT NOT NULL,
    "urlEn" TEXT NOT NULL,
    "urlDe" TEXT NOT NULL,
    "notes" TEXT
);
INSERT INTO "new_Product" ("category", "id", "nameEn", "notes", "priceEur", "ref", "urlDe", "urlEn") SELECT "category", "id", "nameEn", "notes", "priceEur", "ref", "urlDe", "urlEn" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_ref_key" ON "Product"("ref");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
