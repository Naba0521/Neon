import { db } from "../database/index.js";
import { categories } from "../database/schema.js";

export const getCategories = async (_, res) => {
  try {
    const allCategories = await db.query.categories.findMany();
    res.json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve categories." });
  }
};

export const createCategories = async (req, res) => {
  const { title, userId, icon, color } = req.body;

  try {
    const newCategory = await db
      .insert(categories)
      .values({ title, userId, icon, color })
      .returning();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create categories." });
  }
};
