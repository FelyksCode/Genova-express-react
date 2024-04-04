const express = require('express');
const router = express.Router();

const userRoutes  = require('./users/userRoutes');
const raceRoutes  = require('./race/raceRoutes');
const adminRoutes = require('./admin/adminRoutes')
const teamRoutes = require('./team/teamRoutes')

//const newsRoutes = require('./news/newsRoutes'); 

router.use('/users', userRoutes);
router.use('/race', raceRoutes);
router.use('/team', teamRoutes);
router.use('/admin', adminRoutes);
//router.use('/news')
//router.use('/news', newsRoutes);

module.exports = router;
