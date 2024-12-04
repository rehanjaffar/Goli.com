import jwt from "jsonwebtoken";

//admin auth middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "not authorize" });
    }
    const token_decode = jwt.verify(token, process.env.SECRET_KEY);

    req.body.userId = token_decode;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
