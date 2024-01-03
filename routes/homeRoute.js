const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/newProducts', homeController.getNewProduct);
router.get('/newProducts3', homeController.getNewProduct3);
router.get('/getAllBestSeller', homeController.getAllBestSeller);
router.get('/getAllBestSeller3', homeController.getAllBestSeller3);
router.get('/getAllSell', homeController.getAllSell);
router.get('/getAllSell3', homeController.getAllSell3);
router.get('/order', homeController.getOrder);
router.get('/getByIdProduct/:id', homeController.getByIdProduct);
router.get('/listImg/:id', homeController.listImg);
router.get('/productDetail/:id', homeController.getProductDetail);
router.get('/productDetail/:id', homeController.GETALLPRODUCTSIMILAR);
// router.post('/login', homeController.verifyToken, (req, res) => {
//     res.json({ message: 'Route đã được xác thực' });
// });
router.post('/login', homeController.login);
router.post('/loginKH', homeController.loginKH);

module.exports = router;