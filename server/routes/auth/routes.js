const express = require('express');
const {loginUser, registerUser, userProfileInfo} = require('./controller')

const authRouter = express.Router();


authRouter.get("/login", loginUser);

authRouter.get("/signup", registerUser);

authRouter.post("/signup/profileinfo", userProfileInfo);


module.exports = authRouter;