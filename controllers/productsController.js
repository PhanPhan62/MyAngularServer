const db = require('../connection');
const path = require('path');
exports.getAllProduct = (req, res) => {
    db.query('CALL getAllProduct', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi', error: err });
        } else {
            res.status(200).json(results[0]);
        }

    });
};
exports.showProductByID = (req, res) => {
    try {
        const id = req.params.id;
        const sql = 'SELECT * FROM sanpham where id = ?';
        db.query(sql, id, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
}
exports.createProduct = (req, res) => {
    try {
        const { addMonths, format } = require('date-fns');
        const { MaLoai, TenSanPham, MoTaSanPham, MaNSX, MaDonViTinh } = req.body;
        const query = 'INSERT INTO sanpham (MaLoai, TenSanPham, MoTaSanPham, MaNSX, MaDonViTinh) VALUES (?, ?, ?, ?, ?)';
        const values = [MaLoai, TenSanPham, MoTaSanPham, MaNSX, MaDonViTinh];

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Lỗi thêm sản phẩm:', err);
                res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
            } else {
                const sanphamId = result.insertId;

                for (const file of req.files) {
                    const anh = path.join(file.filename);
                    const chitietAnhQuery = 'INSERT INTO chitietanh (MaSanPham, Anh) VALUES (?, ?)';
                    const chitietAnhValues = [sanphamId, anh];

                    db.query(chitietAnhQuery, chitietAnhValues, (err) => {
                        if (err) {
                            console.error('Lỗi thêm chi tiết ảnh:', err);
                        }
                    });
                }

                const ngayBatDau = new Date();
                const formattedNgayBatDau = ngayBatDau.toISOString().slice(0, 10);
                // const ngayKetThuc = req.body.NgayKetThuc || null;
                const ngayKetThuc = addMonths(ngayBatDau, 3);
                const formattedNgayKetThuc = format(ngayKetThuc, 'yyyy-MM-dd');
                const gia = req.body.Gia;

                const giaSanPhamQuery = 'INSERT INTO giasanpham (MaSanPham, NgayBatDau, NgayKetThuc, Gia) VALUES (?, ?, ?, ?)';
                const giaSanPhamValues = [sanphamId, formattedNgayBatDau, formattedNgayKetThuc, gia];

                db.query(giaSanPhamQuery, giaSanPhamValues, (err) => {
                    if (err) {
                        console.error('Lỗi thêm giá sản phẩm:', err);
                        res.status(500).json({ error: 'Đã có lỗi xảy ra khi thêm giá sản phẩm.' });
                    } else {
                        // Thông báo chỉ được gửi khi tất cả dữ liệu đã được thêm thành công
                        res.status(201).json({ message: 'Sản phẩm và giá sản phẩm đã được thêm thành công.' });
                    }
                });
            }
        });
    } catch (error) {
        console.error('Lỗi:', error);
        res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
};


exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    db.query('	CALL deleteProduct(?)', id, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi xóa', error: err });
        } else {
            res.status(200).json({ message: 'Xóa thành công!!!' });
        }
    });

};