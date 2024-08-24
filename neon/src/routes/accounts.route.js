import {
  createAccounts,
  getAccounts,
} from "../controllers/accounts.controller.js";
import { Router } from "express";

const accountsRouter = Router();

accountsRouter.get("/", getAccounts).post("/", createAccounts);

export { accountsRouter };
