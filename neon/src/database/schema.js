import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});
// {
//     "type": "exp",
//     "amount": 111,
//     "category": {
//       "title": "hh",
//       "icon": "FaAppStore",
//       "color": "",
//       "id": "d85ab386-12ff-434b-b451-a668f51b29d8",
//       "userId": "dd942a58-d040-4949-91d3-8a77dc1ab518"
//     },
//     "payee": "",
//     "note": "",
//     "date": "2024-08-02",
//     "time": "12:05",
//     "id": "62f3da94-75b1-4565-8544-145577605eaf",
//     "userId": "dd942a58-d040-4949-91d3-8a77dc1ab518"
//   },
// {
//     "title": "Bus",
//     "icon": "FaBus",
//     "color": "#0166FF",
//     "id": "b8450917-d0aa-4085-8236-378529fb41d3",
//     "userId": "dd942a58-d040-4949-91d3-8a77dc1ab518"
//   },

export const accounts = pgTable("accounts", {
  id: serial("id").primaryKey(),
  amount: integer("amount"),
  category: integer("categoryId"),
  userId: integer("userId"),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
  date: varchar("date", { length: 256 }),
  time: varchar("time", { length: 256 }),
});

export const category = pgTable("category", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }),
  icon: varchar("icon", { length: 256 }),
  color: varchar("color", { length: 256 }),
  userId: integer("userId"),
});
