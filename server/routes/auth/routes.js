const express = require('express');
const {loginUser, registerUser, userProfileInfo} = require('./controller')

const authRouter = express.Router();


authRouter.get("/login", loginUser);

authRouter.get("/signup", registerUser);

authRouter.post("/signup/profileinfo", userProfileInfo);






// Google Callbacks
authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    successRedirect: "/",
    session: false, //Diabled for testing without session
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

authRouter.get("/failure", (req, res) => {
  return res.send("Failed to login");
});


authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email"],
  })
);


module.exports = authRouter;