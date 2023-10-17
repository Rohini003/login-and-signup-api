const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoute = require("./routes/routes");
const ejs = require('ejs');
const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error: " + err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
