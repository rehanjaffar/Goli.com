import doctorModel from "../models/doctorModel.js";

const changeAvailablity = async (req, res) => {
  try {
    const { docId } = req.body;

    const docData = await doctorModel.findById(docId);

    await doctorModel.findByIdAndUpdate(docId, {
      availablity: !docData.availablity,
    });

    res.json({ success: true, message: "Availibilty change" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//get doctorlist

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { changeAvailablity, doctorList };
