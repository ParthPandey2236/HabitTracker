const express = require('express');

const router = express.Router();

router.post('/getSchedule', require('../controller/schedule').getSchedule);

router.get('/landingPage',require('../controller/schedule').scheduleHomePage);

router.post('/updateStatus',require('../controller/schedule').updateStatus);

module.exports = router;