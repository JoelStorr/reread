const http = require("http");
const axios = require("axios");
require('dotenv').config();

const app = require("./app");



const PORT = process.env.PORT || 8000;

const server = http.createServer(app);


app.get("/profile", (req, res) => {
  res.json("Root Profile page");
});


app.get("/", (req, res) => {
  res.json("Root Page");
});

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}...`);
});
