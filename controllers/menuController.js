const db = require('../connection');

exports.getAll = (req, res) => {

    db.query('CALL getAllMenu', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};