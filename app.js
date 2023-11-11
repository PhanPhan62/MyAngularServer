const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const product = require('./routes/productsRoute');
const category = require('./routes/categoriesRoute');
const unit = require('./routes/unitRoute');
const maker = require('./routes/makerRoute');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname)));

app.use('/admin', product, category, unit, maker);

app.get('/date', (res, req, next) => {
    const { addMonths, format } = require('date-fns');

    const ngayBatDau = new Date();
    const formattedNgayBatDau = format(ngayBatDau, 'dd-MM-yyyy');

    // Thêm 3 tháng vào ngày bắt đầu
    const ngayKetThuc = addMonths(ngayBatDau, 3);
    const formattedNgayKetThuc = format(ngayKetThuc, 'dd-MM-yyyy');

    console.log(formattedNgayBatDau); // Ngày bắt đầu
    console.log(formattedNgayKetThuc); // Ngày kết thúc

})
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});