const express = require("express");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
require("dotenv").config();

const authRouter = require("./routes/auth");
const activebooksRouter = require("./routes/activebooks");
const bookclubRouter = require("./routes/bookclub");
const bookRouter = require("./routes/books");
const communityRouter = require("./routes/community");
const listsRouter = require("./routes/lists");

const app = express();


// Authentication Middleware
const AUTH_OPTIONS = {
  callbackURL: "/auth/google/callback",
  clientID: process.CLIENT_ID,
  clientSecret: process.CLIENT_SECRET,
};


function verifyCallback(accessToke, refreshToken, profile, done) {
  console.log("Google Profile", profile);
  done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

app.use(passport.initialize());


// Google Callbacks
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
    session: false, //Diabled for testing without session
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

app.get("/failure", (req, res) => {
  return res.send("Failed to login");
});



app.use('/auth', authRouter);
app.use('/activebooks', activebooksRouter);
app.use('/bookclub', bookclubRouter);
app.use('/book', bookRouter);
app.use('/community', communityRouter);
app.use("lists", listsRouter);


module.exports = app;
