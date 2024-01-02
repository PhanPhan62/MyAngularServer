const express = require('express');
const router = express.Router();
const multer = require('multer');
const productsController = require('../controllers/productsController.js');
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads')); // Thư mục lưu trữ ảnh
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

router.get('/product', productsController.getAllProduct);
router.get('/product/show/:id', productsController.showProductByID);

router.post('/sanpham', upload.array('Anh', 10), productsController.createProduct);
router.patch('/product/update/:id', upload.array('Anh', 10), productsController.updateProduct);

router.delete('/product/delete/:id', productsController.deleteProduct)

module.exports = router;