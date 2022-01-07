const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.home);
// csv route
router.use('/csv', require('./csv'));
module.exports = router;
