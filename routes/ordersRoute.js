const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

router.post('/orders', ordersController.createOrder);
router.get('/countOrder', ordersController.countOrder);
router.get('/countTotalIncome', ordersController.countTotalIncome);
router.get('/countTotalCost', ordersController.countTotalCost);
router.get('/countUsers', ordersController.countUsers);

module.exports = router;