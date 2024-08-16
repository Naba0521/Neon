import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const recordTypeEnum = pgEnum("recordType", ["INCOME", "EXPENSE"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export const records = pgTable("records", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  type: recordTypeEnum("type"),
  userId: integer("userId").references(users.id),
});

export const category = pgTable("category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  userId: integer("userId").references(users.id),
});
