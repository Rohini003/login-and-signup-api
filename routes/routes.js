const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signin", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByEmailAndPassword(email, password);
      console.log("User", user);
      return res.send("success");
      
    } catch (error) {
      // Handle errors here, e.g., return an error response or redirect to an error page.
      console.error(error);
      return res.status(400).send("Invalid email or password");
    }
  });

  router.post("/signup", async (req, res) => {
    try {
        // Attempt to create a new user
        const newUser = await User.create(req.body);
        return res.send("User registration successful");
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            // Handle duplicate key error (email already exists)
            return res.status(400).send("Email already in use");
        }

        return res.status(500).send("An error occurred during registration");
    }
});

  
module.exports = router;
