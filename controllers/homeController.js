const db = require('../connection');

exports.getNewProduct = (req, res) => {

    db.query('CALL getAllNewProduct', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getNewProduct3 = (req, res) => {

    db.query('CALL getAllNewProduct3', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllBestSeller = (req, res) => {

    db.query('CALL getAllBestSeller', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllBestSeller3 = (req, res) => {

    db.query('CALL getAllBestSeller3', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllSell = (req, res) => {

    db.query('CALL getAllSell', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.getAllSell3 = (req, res) => {

    db.query('CALL getAllSell3', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }
    });
};
exports.getByIdProduct = (req, res) => {

    const id = req.params.id;
    db.query('CALL getByIdProduct(?)', [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }
    });
};
exports.listImg = (req, res) => {

    const id = req.params.id;
    db.query('CALL listImg(?)', [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }
    });
};