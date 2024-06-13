const express = require("express");

const statisticsRouter = express.Router();

// Reading Goals
//Set
statisticsRouter.get("/readgoal", (req, res) => {
  res.json("Showhing reading goal");
});


//Get
statisticsRouter.post('/readgoal', (req, res)=>{
    res.json('Setting reading goal');
})


//Statistic Data
//Get Statistic Data
statisticsRouter.get('/statistic', (req, res)=>{
    res.json("Show statistic data");
})



module.exports = statisticsRouter;
