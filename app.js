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
  .then(() => console.log("MongoDB Connected"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRoute);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.static(__dirname + '/views'));


app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
