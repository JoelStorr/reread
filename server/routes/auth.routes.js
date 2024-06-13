const express = require('express');

const authRouter = express.Router();


authRouter.get("/login", (req, res) => {
  res.json("Root Login page");
});

authRouter.get("/signup", (req, res) => {
  res.json("Root SignUp page");
});

module.exports = authRouter;