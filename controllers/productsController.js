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
// exports.createProduct = (req, res) => {
//     const productData = {
//         MaLoai: req.body.MaLoai,
//         TenSanPham: req.body.TenSanPham,
//         MoTaSanPham: req.body.MoTaSanPham,
//         MaNSX: req.body.MaNSX,
//         MaDonViTinh: req.body.MaDonViTinh,
//     };

//     db.query('INSERT INTO sanpham SET ?', productData, (err, result) => {
//         if (err) {
//             console.log(err);
//             res.status(500).json({ message: 'Lỗi khi lưu vào bảng "sanpham"' });
//         } else {
//             const MaSanPham = result.insertId; // Lấy ID của sản phẩm vừa thêm

//             // Xử lý tải lên ảnh vào bảng "chitietanh"
//             const fileNames = req.files.map((file) => file.filename);
//             fileNames.forEach((fileName) => {
//                 const chiTietAnhData = {
//                     MaSanPham: MaSanPham,
//                     Anh: fileName,
//                 };

//                 db.query('INSERT INTO chitietanh SET ?', chiTietAnhData, (err) => {
//                     if (err) {
//                         console.log(err);
//                         res.status(500).json({ message: 'Lỗi khi lưu vào bảng "chitietanh"' });
//                     }
//                 });
//             });

//             res.json({ message: 'Tải lên và lưu sản phẩm thành công' });
//         }
//     });




// };
exports.createProduct = (req, res) => {
    try {
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
                const ngayKetThuc = req.body.NgayKetThuc || null;
                const gia = req.body.Gia;

                const giaSanPhamQuery = 'INSERT INTO giasanpham (MaSanPham, NgayBatDau, NgayKetThuc, Gia) VALUES (?, ?, ?, ?)';
                const giaSanPhamValues = [sanphamId, formattedNgayBatDau, ngayKetThuc, gia];

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