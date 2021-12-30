const express = require('express');

const router = express.Router();

 router.post('/createHabit',require('../controller/createHabit').createHabit);

router.get('/getCreateHabitPage', require('../controller/createHabit').getCreateHabitPage);

module.exports = router;