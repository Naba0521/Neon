const { v4 } = require("uuid");
const { readJson } = require("../utils");

const getAllCategories = async (_, res) => {
  try {
    const categories = readJson("categories.json");
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const createCategory = async (req, res) => {
  try {
    const categories = readJson("categories.json");

    const newCategory = {
      ...req.body,
      id: v4(),
    };

    categories.push(newCategory);

    saveJson("categories.json", categories);

    res.json(newCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateCategory = async (req, res) => {
  try {
    let updatedCategory;

    const id = req.params.id;

    const categories = readJson("categories.json");

    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
        updatedCategory = {
          ...category,
          ...req.body,
        };

        return updatedCategory;
      }

      return category;
    });

    saveJson("categories.json", updatedCategories);

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;

    const categories = readJson("categories.json");

    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );

    saveJson("categories.json", updatedCategories);

    res.json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
