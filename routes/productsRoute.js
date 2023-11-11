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
router.post('/sanpham', upload.array('sanpham', 10), productsController.createProduct);


module.exports = router;