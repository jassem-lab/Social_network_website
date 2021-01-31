const express = require("express");
const app = express();
reqiore("dotenv").config({ path: "./config/.env" });









app.listen(process.env.PORT, () => {
  console.log(`======Server listening on port ${process.env.PORT}======`);
});
