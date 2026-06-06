const express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});