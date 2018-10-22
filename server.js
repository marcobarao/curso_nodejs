const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://localhost:27017/curso_nodejs",
  { useNewUrlParser: true }
);
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3001);
