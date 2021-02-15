const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const { checkUser } = require("./middleware/auth.middleware");

// Database settings

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("====== Database Connected ======"));

// middleware
app.use(cookieParser());
app.use(express.json());

// Routes

app.use("/api/user", userRoutes);

// JWT

app.get("*", checkUser);

// Server Running

app.listen(process.env.PORT, () => {
  console.log(`====== Server listening on port ${process.env.PORT} ======`);
});
