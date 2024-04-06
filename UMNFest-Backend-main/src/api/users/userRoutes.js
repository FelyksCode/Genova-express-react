const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUserByID } = require('./userService');
const { registerUsersToRace } = require('./userController');
const userSchema = require("../../middlewares/schema");
const { validateObjectId } = require("../../middlewares/validateHelper");
const multer = require('multer');
const User = require("../../models/User");
const path = require('path');
const { verifyToken } = require('../../middlewares/auth');

const fileFilter = async (req, file, cb) => {
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
        req.fileValidationError = "File format should be PNG, JPG, JPEG";
        cb(null, false);
        return;
    }
    if (file.size > 3 * 1024 * 1024) {
        req.fileValidationError = "File size should not exceed 3MB";
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

const fields = [
    { name: 'users[0][ktm]', maxCount: 1 },
    { name: 'users[1][ktm]', maxCount: 1 },
    { name: 'users[2][ktm]', maxCount: 1 },
    { name: 'users[3][ktm]', maxCount: 1 },
    { name: 'users[4][ktm]', maxCount: 1 },
    { name: 'users[5][ktm]', maxCount: 1 },
    { name: 'users[6][ktm]', maxCount: 1 },
    { name: 'users[7][ktm]', maxCount: 1 },
    { name: 'users[8][ktm]', maxCount: 1 },
    { name: 'users[9][ktm]', maxCount: 1 },
    { name: 'users[10][ktm]', maxCount: 1 },
    { name: 'users[11][ktm]', maxCount: 1 },
    { name: 'users[12][ktm]', maxCount: 1 },
    { name: 'users[13][ktm]', maxCount: 1 },
    { name: 'users[14][ktm]', maxCount: 1 },
    { name: 'users[15][ktm]', maxCount: 1 },
];

router.get('/', getAllUsers);
router.get('/:id', validateObjectId, getUserById)
router.post('/:id/update', verifyToken, validateObjectId, updateUserByID);
router.post('/register/:race_id', upload.fields(fields), (req, res) => {
    const { users, line_id, team_name } = req.body;
    try {

        var params = {
            team_name,
            line_id: line_id
        }
        const validate = userSchema.validatePayload(params, userSchema.TeamSchema)

        if (validate.error) {
            return res.status(400).json({ error: true, message: validate.message });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: true, message: 'At least one picture is required.' });
        }
        if (req.fileValidationError) {
            return res.status(400).json({ error: true, message: req.fileValidationError });
        }

        var i = 0;
        for (const userData of users) {
            const payload = {
                ktm: req.file,
                ...userData
            }
            const validate = userSchema.validatePayload(payload, userSchema.userRegisterSchema)
            if (validate.error) {
                return res.status(400).json({ error: true, message: validate.message });
            }
            i++;
        }

        registerUsersToRace(req, res)
    } catch (e) {
        return res.status(500).json({ error: true, message: "Internal server error: " + e.message })
    }
});



module.exports = router;