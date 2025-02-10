const express = require("express");

const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.get("/me", auth.isAuth, userController.me);
userRouter.post("/logout", auth.isAuth, userController.logout);
userRouter.put("/update", auth.isAuth, userController.update);
userRouter.get("/allusers", auth.isAuth, auth.isAuthAdmin, userController.allUsers);

module.exports = userRouter;