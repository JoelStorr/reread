const express = require("express");

const bookRouter = express.Router();


bookRouter.get("/:title", async (req, res) => {
  console.log("Parameter", req.params.title);

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title)
    .then((response) => {
      console.log("Response", response.data.items);
      res.json(response.data.items);
    });
});

bookRouter.get('/addtolist', (req, res)=>{
    res.json('Added Book to list');
})

bookRouter.get("/updateprogress", (req, res) => {
  res.json("Update Progress");
});


module.exports = bookRouter;
