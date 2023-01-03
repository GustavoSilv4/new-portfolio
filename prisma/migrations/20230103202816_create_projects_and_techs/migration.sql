-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "project_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "preview_link" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "techs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "projects_id" TEXT NOT NULL,
    CONSTRAINT "techs_projects_id_fkey" FOREIGN KEY ("projects_id") REFERENCES "projects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
