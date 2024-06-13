const express = require("express");

const authRouter = require("./routes/auth.routes");
const activebooksRouter = require("./routes/activebooks.routes")



const app = express();

app.use('/auth', authRouter);
app.use('/activebooks', activebooksRouter);


module.exports = app;
