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

    const imageFile = req.file;

    //checking all data
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Missing Details" });
    }

    //cheacking valid email
    if (!validator.isEmail(email)) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a valid email" });
    }

    //validation strong password
    if (password.length < 8) {
      return res
        .status(401)
        .json({ success: false, message: "Please enter a strong email" });
    }

    //hash password

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

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
    console.log(error);
    res.status(401).json({ success: true, message: error.message });
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

export { addDoctor, loginAdmin };
