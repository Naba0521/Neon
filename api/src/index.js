const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const cors = require("cors");
const { accountRouter } = require("./routes/account.route");
const { authRouter } = require("./routes/auth.route");
const { userRouter } = require("./routes/user.route");
const { authMiddleware } = require("./middlewares/auth.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use("/auth", authRouter);
app.use("/accounts", accountRouter);
app.use("/users", userRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
