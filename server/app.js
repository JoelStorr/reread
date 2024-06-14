const express = require("express");

const authRouter = require("./routes/auth");
const activebooksRouter = require("./routes/activebooks");
const bookclubRouter = require("./routes/bookclub");
const bookRouter = require("./routes/books");
const communityRouter = require("./routes/community");
const listsRouter = require("./routes/lists");



const app = express();

app.use('/auth', authRouter);
app.use('/activebooks', activebooksRouter);
app.use('/bookclub', bookclubRouter);
app.use('/book', bookRouter);
app.use('/community', communityRouter);
app.use("lists", listsRouter);


module.exports = app;
