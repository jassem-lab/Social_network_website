const express = require("express");
const app = express();
require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");

// Database settings

mongoose
  .connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("====== Database Connected ======"));

// Routes

app.use("/api/user", userRoutes);

// Server

app.listen(process.env.PORT, () => {
  console.log(`====== Server listening on port ${process.env.PORT} ======`);
});
