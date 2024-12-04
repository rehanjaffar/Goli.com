import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

// api for adding doctor

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      availablity,
      fees,
      address,
      date,
    } = req.body;

    //cheacking valid email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    //validation strong password
    if (password.length < 8) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a strong password" });
    }

    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    //image get
    const imageUrl = req.file ? req.file.path : null;

    const doctorData = {
      name,
      email,
      password: hashPass,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      availablity,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();
    res.status(200).json({ success: true, message: "Doctor Added" });
  } catch (error) {
    res.status(401).json({ success: false, message: "Email Already exist" });

    console.log(error);
  }
};

//Api for admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASS
    ) {
      const token = jwt.sign(email + password, process.env.SECRET_KEY);
      res.status(200).json({ success: true, message: "token save", token });
      console.log("admin login sucessfully");
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false, message: error.message });
  }
};

//api to get all doc list to admin panel
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select("-password");
    res.json({ success: true, doctors });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//api to add all at once

const addAll = async (req, res) => {
  try {
    const doctors = req.body; // Expecting an array of products
    if (!Array.isArray(doctors)) {
      return res.status(400).json({
        success: false,
        message: "Input data should be an array of products.",
      });
    }

    const newDoctors = await doctorModel.insertMany(doctors); // Save all products at once
    res.status(200).json({
      success: true,
      message: "Products saved successfully",
      data: newDoctors,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addDoctor, loginAdmin, allDoctors, addAll };
