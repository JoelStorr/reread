const express = require("express");

const activebooksRouter = express.Router();


// Update Reading Progress
activebooksRouter.post("/urp", (req, res) => {
  res.json("Update reading progress");
});


// Add rating
activebooksRouter.post("/addrating", (req, res) => {
  res.json("Add Rating");
});

// Mark book as reread
activebooksRouter.post("/reread", (req, res) => {
    res.json("Marked a book as reread");
})


// DNF
activebooksRouter.post("/dnf", (req, res)=>{
    res.json("Marked Book as dnf")
});


//DNF rating
activebooksRouter.post("/dnfrating", (req, res)=>{
    res.json("Ratded dnf book");
})

module.exports = activebooksRouter;
