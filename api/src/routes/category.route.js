const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories).post("/", createCategory);

module.exports = { categoryRouter };
