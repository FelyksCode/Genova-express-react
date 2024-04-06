const express = require('express');
const router = express.Router();
const { getAllRace, getRaceByID } = require('./raceController');
const { validateObjectId } = require("../../middlewares/validateHelper");

router.get('/', getAllRace);
router.get('/:id', validateObjectId, getRaceByID);


module.exports = router;