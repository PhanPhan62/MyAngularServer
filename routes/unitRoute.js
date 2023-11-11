const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController.js');

router.get('/unit', unitController.getAll);

module.exports = router;