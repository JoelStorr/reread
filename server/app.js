const express = require("express");

const authRouter = require("./routes/auth.routes");
const activebooksRouter = require("./routes/activebooks.routes");
const bookclubRouter = require("./routes/bookclub.routes");
const bookRouter = require("./routes/books.routes");



const app = express();

app.use('/auth', authRouter);
app.use('/activebooks', activebooksRouter);
app.use('/bookclub', bookclubRouter);
app.use('/book', bookRouter);


module.exports = app;
