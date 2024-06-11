const http = require("http");
const axios = require("axios");
const app = require("./app");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
const GOOGLEBOOKSAPI = app.get("/books/:title", async (req, res) => {
  console.log("Parameter", req.params.title);

  axios
    .get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.title)
    .then((response) => {
      console.log("Response", response.data.items);
      res.json(response.data.items);
    });
});

app.get("/profile", (req, res) => {
  res.json("Root Profile page");
});

app.get("/login", (req, res) => {
  res.json("Root Login page");
});

app.get("/signup", (req, res) => {
  res.json("Root SignUp page");
});

app.get("/", (req, res) => {
  res.json("Root Page");
});

server.listen(PORT, () => {
  console.log(`Listen on port ${PORT}...`);
});
