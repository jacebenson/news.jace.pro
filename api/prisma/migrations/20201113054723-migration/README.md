# Migration `20201113054723-migration`

This migration has been generated by Jace at 11/12/2020, 11:47:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Item" (
"id" SERIAL,
"url" text   NOT NULL ,
"title" text   NOT NULL ,
"authors" jsonb   NOT NULL ,
"source" text   NOT NULL ,
"type" text   NOT NULL ,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Item.url_unique" ON "public"."Item"("url")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201113054101-migration..20201113054723-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = ["postgresql"]
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -12,9 +12,9 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 // TODO: Please remove the following example:
-model Page {
+model Item {
   id    Int     @id @default(autoincrement())
   url String  @unique
   title String
   authors Json
```

