const express = require("express");

const bookclubRouter = express.Router();
 

// Create a bookclub
bookclubRouter.post("/createbookclub", (req, res) => {
  res.json("Creating a bookclub");
});

bookclubRouter.get("/joinbookclub", (req, res) => {
  res.json("Root SignUp page");
});

// Load messages from bookclub
bookclubRouter.get('/messages/load', (req, res)=>{
    res.json("Load messages");
})

// Send message to bookclub
bookclubRouter.post('/messages/post', (req, res)=>{
    res.json('Posted to chat');
})

// Send Image message
bookclubRouter.post('/messages/img', (req, res)=>{
    res.json('Send an Image');
})


module.exports = bookclubRouter;
