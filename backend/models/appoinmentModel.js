import mongoose from "mongoose";

const appoinmentSchema = new mongoose.Schema({
  userId: { type: String },
  docId: { type: String },
  slotDate: { type: String },
  slotTime: { type: String },
  userData: { type: Object },
  docData: { type: Object },
  amount: { type: Number },
  date: { type: Number },
  cancelled: { type: Boolean, default: false },
  payment: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
});

const AppoinmentModel =
  mongoose.models.appoinment || mongoose.model("appoinment", appoinmentSchema);

export default AppoinmentModel;
