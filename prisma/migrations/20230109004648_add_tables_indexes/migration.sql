-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_techs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projects_id" TEXT NOT NULL
);
INSERT INTO "new_techs" ("id", "name", "projects_id") SELECT "id", "name", "projects_id" FROM "techs";
DROP TABLE "techs";
ALTER TABLE "new_techs" RENAME TO "techs";
CREATE INDEX "techs_projects_id_idx" ON "techs"("projects_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
