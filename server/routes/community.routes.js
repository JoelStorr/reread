const express = require("express");

const communityRouter = express.Router();

// See what other read
communityRouter.get("/swor", (req, res) => {
  res.json("Showing what other read");
});

// Search for others profile
communityRouter.post("/search", (req, res) => {
  res.json("Other peoples profile");
});

// Get user profile
communityRouter.get('/user/:name', (req, res)=>{
    res.json("Show the profile of another user")
});




module.exports = communityRouter;
