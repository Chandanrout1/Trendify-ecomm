import express from "express";
import { loginUser,adminLogin,signupUser } from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.post("/signup", signupUser)
userRouter.post("/login", loginUser)
userRouter.post("/adminlogin", adminLogin)


export default userRouter;


