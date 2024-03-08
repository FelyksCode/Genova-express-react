const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById } = require('./userService');
const { registerUserToRace } = require('./userController');
const userSchema = require("../../middlewares/schema");
const { validateObjectId } = require("../../middlewares/validateHelper");
const multer = require('multer');
const User = require("../../models/User");
const path = require('path');

const fileFilter = async (req, file, cb) => {
    if (!req.body.name || !req.body.nim || !req.body.email) {
        req.fileValidationError = "Missing required user fields (name, nim, or email)";
        cb(null, false);
        return;
    }
    const { email, nim } = req.body;
    const user = await User.findOne({ $or: [{ nim }, { email }] });
    if (user) {
        cb(null, false);
        return;
    } else if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
        req.fileValidationError = "File format should be PNG, JPG, JPEG";
        cb(null, false);
        return;
    }
    cb(null, true);
};


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/ktm');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get('/', getAllUsers);
router.get('/:id', validateObjectId, getUserById)
router.post('/register/:race_id', upload.single('ktm'),  (req, res) => {
    if (req.fileValidationError) {
        return res.status(400).json({ error: true, message: req.fileValidationError });
    }
    const payload = {
        ktm: req.file,
        ...req.body
    }
    const validate = userSchema.validatePayload(payload, userSchema.userRegisterSchema)
    if(validate.error) {
        return res.status(400).json({ error: true, message: validate.message });
    }
    registerUserToRace(req, res)
});


module.exports = router;