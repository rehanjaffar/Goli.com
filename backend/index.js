import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import path from "path";

//database
import connectDB from "./config/db.js";
connectDB();
//cloudinary
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoutes.js";
connectCloudinary();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/uploads", express.static(path.join("uploads")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
