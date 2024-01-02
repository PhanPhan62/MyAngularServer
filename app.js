const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const product = require('./routes/productsRoute');
const category = require('./routes/categoriesRoute');
const unit = require('./routes/unitRoute');
const maker = require('./routes/makerRoute');
const menu = require('./routes/menuRoute');
const order = require('./routes/ordersRoute');
const home = require('./routes/homeRoute');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname)));

app.use('/admin', product, category, unit, maker);
app.use('', menu, home, order);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});