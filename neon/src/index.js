import { config } from "dotenv";
import express from "express";
import cors from "cors";
import {
  accountsRouter,
  usersRouter,
  categoriesRouter,
} from "./routes/index.js";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/accounts", accountsRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});
