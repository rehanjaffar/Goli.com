import jwt from "jsonwebtoken";

//admin auth middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    if (!atoken) {
      return res.json({ success: false, message: "not authorize" });
    }
    const token_decode = jwt.verify(atoken, process.env.SECRET_KEY);

    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASS) {
      return res.json({ success: false, message: "not authorize" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
