const db = require('../connection');

exports.createOrder = (req, res) => {
    try {
        // Lấy thông tin từ req.body
        const { MaKhachHang } = req.body;
        const chiTietDonHang = Array.isArray(req.body.chiTietDonHang) ? req.body.chiTietDonHang : [req.body.chiTietDonHang];

        // Tạo ngày hiện tại
        const NgayDat = new Date().toISOString().slice(0, 19).replace("T", " ");

        // Thêm dữ liệu vào bảng 'donhang'
        const orderQuery = 'INSERT INTO donhang (MaKhachHang, NgayDat, TrangThaiDonHang) VALUES (?, ?, 1)';
        const orderValues = [MaKhachHang, NgayDat];

        db.query(orderQuery, orderValues, (err, result) => {
            if (err) {
                console.error('Lỗi thêm đơn hàng:', err);
                res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
            } else {
                const orderId = result.insertId;

                // Thêm dữ liệu vào bảng 'chitietdonhang' cho từng sản phẩm
                chiTietDonHang.forEach((item) => {
                    const { productId, quantity, Gia, ThanhTien } = item;
                    const detailOrderQuery = 'INSERT INTO chitietdonhang (MaDonHang, MaSanPham, SoLuong, GiaMua, ThanhTien) VALUES (?, ?, ?, ?, ?)';
                    const detailOrderValues = [orderId, productId, quantity, Gia, ThanhTien];

                    db.query(detailOrderQuery, detailOrderValues, (err) => {
                        if (err) {
                            console.error('Lỗi thêm chi tiết đơn hàng:', err);
                        }
                    });
                    // console.log(chiTietDonHang);

                    db.query('CALL UpdateDonHangThanhTien();', (err, results) => {
                        if (err) {
                            res.status(500).json({ message: 'Lỗi', error: err });
                        } else {
                            res.status(200).json(results[0]);
                        }

                    });
                });

                // Thông báo chỉ được gửi khi tất cả dữ liệu đã được thêm thành công
                res.status(200).json({ message: 'Đơn hàng và chi tiết đơn hàng đã được thêm thành công.' });
            }
        });
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
};
exports.countOrder = (req, res) => {

    db.query('SELECT * FROM donhang WHERE NgayDat >= CURDATE() - INTERVAL 30 DAY and TrangThaiDonHang = 1; ', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results);
        }

    });
};
exports.countTotalIncome = (req, res) => {

    db.query('SELECT ctdh.SoLuong, ctdh.GiaMua FROM chitietdonhang ctdh INNER JOIN donhang dh on ctdh.MaDonHang = dh.id WHERE dh.TrangThaiDonHang = 1 ', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results);
        }

    });
};
exports.countTotalCost = (req, res) => {

    db.query('SELECT cthdn.SoLuong, cthdn.DonGiaNhap FROM chitiethoadonnhap cthdn INNER JOIN hoadonnhap hdn on cthdn.MaHoaDonNhap = hdn.id ', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results);
        }

    });
};
exports.countUsers = (req, res) => {

    db.query('SELECT * FROM taikhoankhachhang', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results);
        }

    });
};

exports.getAll = (req, res) => {

    db.query('Select * from donhang', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results);
        }

    });
};