const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { getAllNews, getNewsByID, createNews } = require('./newsService');
const { validatePayload, newsSchema } = require('../../middlewares/schema');
const { validateObjectId } = require('../../middlewares/validateHelper');
const multer = require("multer");
const path = require('path');

const fileFilter = async (req, file, cb) => {
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file.mimetype)) {
        req.fileValidationError = "File format should be PNG, JPG, JPEG";
        cb(null, false);
        return;
    }
    cb(null, true);
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/news');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get('/', getAllNews);
router.get('/:id', validateObjectId, getNewsByID);

router.post('/create', upload.single('image'), async(req, res) => {
    var params = {
        image: req.file,
        ...req.body
    }
    const validate = validatePayload(params, newsSchema)
    if(validate.error) {
        return res.status(400).json({ error: true, message: validate.message });
    }
    return createNews(req, res);
});

router.put('/update/:id', async(req, res) => {

});


router.delete('/delete/:id', async(req, res) => {
    
});


router.get('/:_id', async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: true, message: 'Invalid ID format' });
    }
    // return await getRaceByID(req, res);;
});


module.exports = router;