const express = require("express");
const router = express.Router();

const signUpController = require("../controllers/signup.controllers");
const signin = require("../controllers/signin.controller");

router.post("/signup", signUpController)
router.post('/signin', signin);


module.exports = router;
