require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();
const secretKey = process.env.JWT_SECRET_KEY || "UMNFEST2024";

const ACCESS_TOKEN_EXPIRED = process.env.JWT_ACCESSTOKEN_EXPIRED || "1m";
const REFRESH_TOKEN_EXPIRED = process.env.JWT_REFRESHTOKEN_EXPIRED || "1d";

const Admin = require("../../models/Admin");
const { verifyToken } = require("../../middlewares/auth");
const {
  validatePayload,
  AdminSchema,
  refreshSchema,
} = require("../../middlewares/schema");

router.get("/", (req,res) => {
    res.send("Testing!")
})

router.post("/login", async (req, res) => {
  const validate = validatePayload(req.body, AdminSchema);
  if (validate.error) {
    return res.status(400).json({ error: true, message: validate.message });
  }
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin)
      return res.status(404).json({ error: true, message: "Admin not found" });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: true, message: "Invalid email/password" });
    }

    const accessToken = jwt.sign({ adminId: admin._id }, secretKey, {
      expiresIn: ACCESS_TOKEN_EXPIRED,
    });
    const refreshToken = jwt.sign({ adminId: admin._id }, secretKey, {
      expiresIn: REFRESH_TOKEN_EXPIRED,
    });

    return res.json({
      error: false,
      access_token: accessToken,
      refresh_token: refreshToken,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: true, message: "Internal server error" });
  }
});

router.post("/refresh-token", async (req, res) => {
  const validate = validatePayload(req.body, refreshSchema);
  if (validate.error) {
    return res.status(400).json({ error: true, message: validate.message });
  }
  const { refresh_token } = req.body;
  if (!refresh_token) {
    return res
      .status(401)
      .json({ error: true, message: "Refresh token not provided" });
  }

  jwt.verify(refresh_token, secretKey, async (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ error: true, message: "Invalid refresh token" });
    }

    const newAccessToken = jwt.sign({ adminId: decoded.adminId }, secretKey, {
      expiresIn: ACCESS_TOKEN_EXPIRED,
    });

    return res.json({ error: false, access_token: newAccessToken });
  });
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secretKey);
    const admin = await Admin.findById(decoded.adminId);
    if (!admin) {
      return res.status(404).json({ error: true, message: "Admin not found" });
    }
    return res.json({ error: false, data: { email: admin.email } });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
});


module.exports = router;
