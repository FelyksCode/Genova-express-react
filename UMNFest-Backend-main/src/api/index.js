const express = require('express');
const router = express.Router();

const userRoutes = require('./users/userRoutes');
const raceRoutes = require('./race/raceRoutes');
const newsRoutes = require('./news/newsRoutes'); 

router.use('/users', userRoutes);
router.use('/race', raceRoutes);
router.use('/news', newsRoutes);

module.exports = router;
