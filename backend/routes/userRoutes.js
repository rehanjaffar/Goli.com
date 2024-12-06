import express from "express";
import {
  bookAppoinment,
  getProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userControllers.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/book-appoinment", authUser, bookAppoinment);
userRouter.get("/get-profile", authUser, getProfile);
userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);

export default userRouter;