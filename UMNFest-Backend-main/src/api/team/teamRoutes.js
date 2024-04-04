const express = require('express');
const router = express.Router();
const userSchema = require("../../middlewares/schema");
const { validateObjectId } = require("../../middlewares/validateHelper");
const multer = require('multer');
const { confirmPayment } = require("./teamService");
const path = require('path');
const { verifyToken } = require('../../middlewares/auth');
const { getAllTeams, getTeamById } = require('./teamController');

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
        cb(null, 'public/uploads/proof');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get('/', getAllTeams);
router.get('/:id',validateObjectId, getTeamById);
router.post('/:id/confirmPayment', upload.single('proof'), validateObjectId, confirmPayment)

module.exports = router