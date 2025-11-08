// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./db");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/profiles", profileRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log("Database setup successfully");
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
