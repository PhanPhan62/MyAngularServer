const db = require('../connection'); //Kết nối cơ sở dữ liệu

exports.getAll = (req, res) => {
    // Thực thi câu truy vấn
    db.query('CALL getAllUnit', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }
    });
};