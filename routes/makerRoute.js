const express = require('express');
const router = express.Router();
const makerController = require('../controllers/makerController.js');

router.get('/maker', makerController.getAll);

module.exports = router;