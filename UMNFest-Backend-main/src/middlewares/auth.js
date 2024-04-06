require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY || "UMNFEST";
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  var token = req.headers["authorization"];
  if (!token)
    return res
      .status(403)
      .json({ error: true, message: "A token is required for authentication" });
  
  try {
    token = token.replace("Bearer ", "").trim();
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ error: true, message: err.message });
  }
  return next();
};


module.exports = {
    verifyToken,
}