const express = require("express");

const listsRouter = express.Router();

// Create new list
// Add data if list is public private
// Name of the list
listsRouter.post("/createlist", (req, res) => {
  res.json("creating list");
});

// Edit list
listsRouter.post("/rename", (req, res)=>{
    res.json('Changed lists name');
});


//Changes lists visibility
listsRouter.post("/visibility", (req, res)=>{
    res.json("Changed  Visibility");
});


// Delete List
listsRouter.delete("/:listid", (req, res)=>{
    res.json("Deleted list with the id: " + req.params.listid);
})




module.exports = listsRouter;
