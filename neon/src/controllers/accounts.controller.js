import { db } from "../database/index.js";
import { accounts } from "../database/schema.js";

// Get all accounts with their associated categories
export const getAccounts = async (_, res) => {
  try {
    const allAccounts = await db.query.accounts.findMany({
      with: {
        category: true, // Include related categories
      },
    });
    res.json(allAccounts);
  } catch (error) {
    console.error("Error retrieving accounts:", error); // Log the error for debugging
    res.status(500).json({ error: "Failed to retrieve accounts." });
  }
};

// Create a new account
export const createAccounts = async (req, res) => {
  const { amount, categoryId, userId, payee, note, date, time } = req.body;

  try {
    const [newAccount] = await db
      .insert(accounts)
      .values({ amount, categoryId, userId, payee, note, date, time })
      .returning(); // Ensure to get the newly created account

    res.status(201).json(newAccount);
  } catch (error) {
    console.error("Error creating account:", error); // Log the error for debugging
    res.status(500).json({ error: "Failed to create account." });
  }
};
