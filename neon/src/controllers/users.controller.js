import { db } from "../database/index.js";
import { users } from "../database/schema.js";

// Get all users with their associated accounts
export const getUsers = async (req, res) => {
  try {
    const allUsers = await db.query.users.findMany({
      with: {
        accounts: true,
      },
    });

    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users." });
  }
};

// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await db
      .insert(users)
      .values({ name, email, password })
      .returning();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
};
