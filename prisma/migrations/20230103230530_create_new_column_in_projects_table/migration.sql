/*
  Warnings:

  - Added the required column `image_url` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "preview_link" TEXT NOT NULL
);
INSERT INTO "new_projects" ("description", "id", "preview_link", "project_name", "repository") SELECT "description", "id", "preview_link", "project_name", "repository" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
