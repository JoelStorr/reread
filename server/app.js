const express = require("express");

const authRouter = require("./routes/auth.routes");
const activebooksRouter = require("./routes/activebooks.routes");
const bookclubRouter = require("./routes/bookclub.routes");
const bookRouter = require("./routes/books.routes");
const communityRouter = require("./routes/community.routes");
const listsRouter = require("./routes/lists.routes");



const app = express();

app.use('/auth', authRouter);
app.use('/activebooks', activebooksRouter);
app.use('/bookclub', bookclubRouter);
app.use('/book', bookRouter);
app.use('/community', communityRouter);
app.use("lists", listsRouter);


module.exports = app;
