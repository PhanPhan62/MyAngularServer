const db = require('../connection');
const path = require('path');
const fs = require('fs');

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

exports.updateProduct = (req, res) => {
    try {
        const { addMonths, format } = require('date-fns');
        const id = req.params.id;
        const { MaLoai, TenSanPham, MoTaSanPham, MaNSX, MaDonViTinh, Gia } = req.body;

        // Lấy danh sách các ảnh cũ để xóa
        const getOldImagesQuery = 'SELECT Anh FROM chitietanh WHERE MaSanPham = ?';
        db.query(getOldImagesQuery, [id], (err, results) => {
            if (err) {
                console.error('Lỗi truy vấn danh sách ảnh cũ:', err);
                return res.status(500).json({ error: 'Đã có lỗi xảy ra khi cập nhật thông tin sản phẩm.' });
            } else {
                // Xóa chi tiết ảnh cũ
                const deleteImagesQuery = 'DELETE FROM chitietanh WHERE MaSanPham = ?';
                db.query(deleteImagesQuery, [id], (err) => {
                    if (err) {
                        console.error('Lỗi xóa chi tiết ảnh cũ:', err);
                        return res.status(500).json({ error: 'Đã có lỗi xảy ra khi cập nhật thông tin sản phẩm.' });
                    }

                    // Xóa các tệp tin ảnh cũ từ thư mục
                    for (const result of results) {
                        const oldImagePath = path.join(__dirname, '../uploads', result.Anh);
                        if (fs.existsSync(oldImagePath)) {
                            fs.unlinkSync(oldImagePath);
                        }
                    }


                }); // Thêm chi tiết ảnh mới
                for (const file of req.files) {
                    const anh = path.join(file.filename);
                    const chitietAnhQuery = 'INSERT INTO chitietanh (MaSanPham, Anh) VALUES (?, ?)';
                    const chitietAnhValues = [id, anh];

                    db.query(chitietAnhQuery, chitietAnhValues, (err) => {
                        if (err) {
                            console.error('Lỗi thêm chi tiết ảnh:', err);
                        }
                    });
                }

                // Cập nhật thông tin cơ bản sản phẩm
                const updateQuery = 'UPDATE sanpham SET MaLoai = ?, TenSanPham = ?, MoTaSanPham = ?, MaNSX = ?, MaDonViTinh = ? WHERE id = ?';
                const updateValues = [MaLoai, TenSanPham, MoTaSanPham, MaNSX, MaDonViTinh, id];

                db.query(updateQuery, updateValues, (err) => {
                    if (err) {
                        console.error('Lỗi cập nhật thông tin sản phẩm:', err);
                        return res.status(500).json({ error: err });
                    }
                });
                // Cập nhật giá sản phẩm
                const ngayKetThuc = addMonths(new Date(), 3);
                const formattedNgayKetThuc = format(ngayKetThuc, 'yyyy-MM-dd');

                const updateGiaQuery = 'UPDATE giasanpham SET NgayKetThuc = ?, Gia = ? WHERE MaSanPham = ?';
                const updateGiaValues = [formattedNgayKetThuc, Gia, id];

                db.query(updateGiaQuery, updateGiaValues, (err) => {
                    if (err) {
                        console.error('Lỗi cập nhật giá sản phẩm:', err);
                        return res.status(500).json({ error: 'Đã có lỗi xảy ra khi cập nhật giá sản phẩm.' });
                    }

                    return res.status(200).json({ message: 'Thông tin sản phẩm đã được cập nhật thành công.' });
                });
            }
        });
    } catch (error) {
        console.error('Lỗi:', error);
        return res.status(500).json({ error: 'Đã có lỗi xảy ra.' });
    }
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    // Lấy danh sách ảnh cần xóa từ CSDL trước khi xóa dữ liệu
    db.query('SELECT Anh FROM chitietanh WHERE MaSanPham = ?', id, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi truy vấn', error: err });
        } else {
            for (const result of results) {
                const imageName = result.Anh;
                const imagePath = path.join(__dirname, '../uploads', imageName);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
                // console.log(imageName, imagePath);
            }
            // Xóa dữ liệu từ CSDL
            db.query('CALL deleteProduct(?)', id, (err, results) => {
                if (err) {
                    res.status(500).json({ message: 'Lỗi xóa', error: err });
                } else {
                    // Xóa ảnh từ thư mục lưu trữ
                    res.status(200).json({ message: 'Xóa thành công!!!' });
                }
            });
        }
    });
};