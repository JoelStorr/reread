const express = require('express');
const {loginUser, registerUser} = require('./controller')

const authRouter = express.Router();


authRouter.get("/login", loginUser);

authRouter.get("/signup", registerUser);


module.exports = authRouter;