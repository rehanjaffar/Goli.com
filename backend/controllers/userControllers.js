import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// Api to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!validator.isEmail(email)) {
      res.json({ success: false, message: "Enter a valid email" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newData = {
      name,
      email,
      password: hashPass,
    };
    const newUser = new userModel(newData);

    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

    res.json({ success: true, message: "User register successfully", token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      res.json({ success: false, message: "Wrong Password" });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
      res.json({ success: true, token });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//api to get user profile data
const getProfile = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId.id).select("-password");
    res.json({ success: true, userData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//api to update profile
const updateProfile = async (req, res) => {
  try {
    const { userId, name, phone, address, dob, gender } = req.body;

    const imageFile = req.file ? req.file.path : null;

    await userModel.findByIdAndUpdate(userId.id, {
      name,
      phone,
      dob,
      gender,
      address: JSON.parse(address),
      image: imageFile,
    });

    res.json({ success: true, message: "Profile Updated" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { registerUser, loginUser, getProfile, updateProfile };
