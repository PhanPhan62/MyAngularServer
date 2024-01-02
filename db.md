CREATE DATABASE  IF NOT EXISTS `grimcy` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `grimcy`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: grimcy
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitietanh`
--

DROP TABLE IF EXISTS `chitietanh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietanh` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `Anh` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `chitietanh_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=320 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietanh`
--

LOCK TABLES `chitietanh` WRITE;
/*!40000 ALTER TABLE `chitietanh` DISABLE KEYS */;
INSERT INTO `chitietanh` VALUES (183,57,'Anh-1701418177339.jpg'),(184,57,'Anh-1701418177343.jpg'),(185,57,'Anh-1701418177346.jpg'),(186,57,'Anh-1701418177348.jpg'),(187,58,'Anh-1701418710199.jpg'),(188,58,'Anh-1701418710201.jpg'),(189,58,'Anh-1701418710203.jpg'),(190,58,'Anh-1701418710205.jpg'),(191,58,'Anh-1701418710207.jpg'),(192,58,'Anh-1701418710209.jpg'),(193,58,'Anh-1701418710211.jpg'),(196,59,'Anh-1701420012307.jpg'),(197,59,'Anh-1701420012311.jpg'),(198,59,'Anh-1701420012315.jpg'),(236,72,'Anh-1702300799508.jpg'),(237,72,'Anh-1702300799516.jpg'),(238,72,'Anh-1702300799516.jpg'),(239,72,'Anh-1702300799520.jpg'),(240,72,'Anh-1702300799521.jpg'),(265,77,'Anh-1704118342768.jpg'),(266,77,'Anh-1704118342774.jpg'),(267,77,'Anh-1704118342778.jpg'),(268,77,'Anh-1704118342780.jpg'),(269,77,'Anh-1704118342783.jpg'),(270,77,'Anh-1704118342785.jpg'),(271,77,'Anh-1704118342787.jpg'),(272,78,'Anh-1704118678642.jpg'),(273,78,'Anh-1704118678642.jpg'),(274,78,'Anh-1704118678650.jpg'),(275,78,'Anh-1704118678651.jpg'),(276,78,'Anh-1704118678653.jpg'),(277,78,'Anh-1704118678655.jpg'),(278,79,'Anh-1704119284646.jpg'),(279,79,'Anh-1704119284651.jpg'),(280,79,'Anh-1704119284660.jpg'),(281,79,'Anh-1704119284664.jpg'),(282,79,'Anh-1704119284667.jpg'),(283,79,'Anh-1704119284670.jpg'),(284,79,'Anh-1704119284672.jpg'),(285,79,'Anh-1704119284673.jpg'),(286,79,'Anh-1704119284673.jpg'),(287,73,'Anh-1704120293105.jpg'),(288,73,'Anh-1704120293107.jpg'),(289,73,'Anh-1704120293109.jpg'),(290,73,'Anh-1704120293111.jpg'),(291,73,'Anh-1704120293112.jpg'),(292,73,'Anh-1704120293114.jpg'),(293,73,'Anh-1704120293115.jpg'),(294,74,'Anh-1704120700244.jpg'),(295,74,'Anh-1704120700246.jpg'),(296,74,'Anh-1704120700249.jpg'),(297,74,'Anh-1704120700254.jpg'),(298,74,'Anh-1704120700256.jpg'),(299,80,'Anh-1704121022434.jpg'),(300,80,'Anh-1704121022435.jpg'),(301,80,'Anh-1704121022437.jpg'),(302,80,'Anh-1704121022440.jpg'),(303,81,'Anh-1704121167631.jpg'),(304,81,'Anh-1704121167633.jpg'),(305,81,'Anh-1704121167637.jpg'),(306,81,'Anh-1704121167642.jpg'),(307,81,'Anh-1704121167644.jpg'),(308,81,'Anh-1704121167646.jpg'),(309,81,'Anh-1704121167649.jpg'),(310,81,'Anh-1704121167652.jpg'),(311,81,'Anh-1704121167654.jpg'),(312,82,'Anh-1704124141004.jpg'),(313,82,'Anh-1704124141008.jpg'),(314,82,'Anh-1704124141008.jpg'),(315,82,'Anh-1704124141011.jpg'),(316,82,'Anh-1704124141012.jpg'),(317,82,'Anh-1704124141014.jpg'),(318,82,'Anh-1704124141019.jpg'),(319,82,'Anh-1704124141023.jpg');
/*!40000 ALTER TABLE `chitietanh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietdonhang`
--

DROP TABLE IF EXISTS `chitietdonhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietdonhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaDonHang` int DEFAULT NULL,
  `MaSanPham` int DEFAULT NULL,
  `SoLuong` int DEFAULT NULL,
  `GiaMua` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaDonHang` (`MaDonHang`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `chitietdonhang_ibfk_1` FOREIGN KEY (`MaDonHang`) REFERENCES `donhang` (`id`),
  CONSTRAINT `chitietdonhang_ibfk_2` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietdonhang`
--

LOCK TABLES `chitietdonhang` WRITE;
/*!40000 ALTER TABLE `chitietdonhang` DISABLE KEYS */;
INSERT INTO `chitietdonhang` VALUES (9,3,72,100,200000),(10,3,59,123,500000),(11,3,58,200,300000),(12,6,NULL,NULL,NULL),(13,8,NULL,NULL,NULL),(14,9,NULL,NULL,NULL),(15,11,NULL,NULL,NULL),(16,13,NULL,NULL,NULL),(17,18,NULL,NULL,NULL),(18,18,NULL,NULL,NULL),(19,19,58,2,20),(20,19,58,1,30),(21,20,NULL,NULL,NULL),(22,21,NULL,NULL,NULL),(23,23,NULL,NULL,NULL),(24,24,NULL,NULL,NULL),(25,25,57,4,281200),(26,25,59,3,108999),(27,26,57,2,281200),(28,26,58,2,434699),(29,26,59,2,108999),(30,27,57,3,281200),(31,27,58,3,434699),(32,27,59,3,108999),(33,28,57,3,281200),(34,28,58,3,434699),(35,28,59,3,108999),(36,29,57,1,281200),(37,30,57,1,281200),(38,31,57,2,281200),(39,31,58,2,434699),(40,31,59,1,108999),(41,32,59,3,108999),(42,33,57,2,281200),(43,33,58,2,434699),(44,33,59,2,108999),(45,34,72,1,498838),(46,34,57,1,281200),(47,35,57,1,281200),(48,36,72,1,498838),(49,36,57,2,281200),(50,37,57,1,281200),(51,38,57,2,281200),(52,39,57,1,281200),(53,40,58,1,434699),(54,40,72,1,498838),(55,40,73,1,37000),(56,40,77,1,100000),(57,40,74,1,32472),(58,40,78,1,50000);
/*!40000 ALTER TABLE `chitietdonhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonnhap`
--

DROP TABLE IF EXISTS `chitiethoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonnhap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `MaHoaDonNhap` int DEFAULT NULL,
  `SoLuong` int DEFAULT NULL,
  `DonGiaNhap` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  KEY `MaHoaDonNhap` (`MaHoaDonNhap`),
  CONSTRAINT `chitiethoadonnhap_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`),
  CONSTRAINT `chitiethoadonnhap_ibfk_2` FOREIGN KEY (`MaHoaDonNhap`) REFERENCES `hoadonnhap` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonnhap`
--

LOCK TABLES `chitiethoadonnhap` WRITE;
/*!40000 ALTER TABLE `chitiethoadonnhap` DISABLE KEYS */;
INSERT INTO `chitiethoadonnhap` VALUES (7,57,1,200,50000),(8,58,2,300,50000),(9,59,3,100,90000),(11,72,3,133,100000),(12,73,1,322,100000),(13,74,3,411,100000),(14,77,1,121,100000),(15,78,3,112,100000),(16,79,2,100,100000),(17,80,2,100,100000),(18,81,3,100,100000);
/*!40000 ALTER TABLE `chitiethoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonxuat`
--

DROP TABLE IF EXISTS `chitiethoadonxuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonxuat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaHoaDonXuat` int DEFAULT NULL,
  `MaSanPham` int DEFAULT NULL,
  `SoLuong` int DEFAULT NULL,
  `GiaBan` float DEFAULT NULL,
  `ChietKhau` float DEFAULT NULL,
  `TraLai` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaHoaDonXuat` (`MaHoaDonXuat`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `chitiethoadonxuat_ibfk_1` FOREIGN KEY (`MaHoaDonXuat`) REFERENCES `hoadonxuat` (`id`),
  CONSTRAINT `chitiethoadonxuat_ibfk_2` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonxuat`
--

LOCK TABLES `chitiethoadonxuat` WRITE;
/*!40000 ALTER TABLE `chitiethoadonxuat` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitiethoadonxuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietkho`
--

DROP TABLE IF EXISTS `chitietkho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietkho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaKho` int DEFAULT NULL,
  `MaSanPham` int DEFAULT NULL,
  `SoLuong` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaKho` (`MaKho`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `chitietkho_ibfk_1` FOREIGN KEY (`MaKho`) REFERENCES `kho` (`id`),
  CONSTRAINT `chitietkho_ibfk_2` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietkho`
--

LOCK TABLES `chitietkho` WRITE;
/*!40000 ALTER TABLE `chitietkho` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietkho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietkhuyenmai`
--

DROP TABLE IF EXISTS `chitietkhuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietkhuyenmai` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `ThoiGianBatDau` date DEFAULT NULL,
  `ThoiGianKetThuc` date DEFAULT NULL,
  `MaKhuyenMai` int DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  KEY `MaKhuyenMai` (`MaKhuyenMai`),
  CONSTRAINT `chitietkhuyenmai_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`),
  CONSTRAINT `chitietkhuyenmai_ibfk_2` FOREIGN KEY (`MaKhuyenMai`) REFERENCES `khuyenmai` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietkhuyenmai`
--

LOCK TABLES `chitietkhuyenmai` WRITE;
/*!40000 ALTER TABLE `chitietkhuyenmai` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietkhuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietkiemkho`
--

DROP TABLE IF EXISTS `chitietkiemkho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietkiemkho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `MaKiemKho` int DEFAULT NULL,
  `SoLuongDemDuoc` int DEFAULT NULL,
  `SoLuongTinhToan` int DEFAULT NULL,
  `SoLuongThayDoi` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  KEY `MaKiemKho` (`MaKiemKho`),
  CONSTRAINT `chitietkiemkho_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`),
  CONSTRAINT `chitietkiemkho_ibfk_2` FOREIGN KEY (`MaKiemKho`) REFERENCES `kiemkho` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietkiemkho`
--

LOCK TABLES `chitietkiemkho` WRITE;
/*!40000 ALTER TABLE `chitietkiemkho` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietkiemkho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietmenu`
--

DROP TABLE IF EXISTS `chitietmenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietmenu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenConMenu` varchar(255) DEFAULT NULL,
  `menuid` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `menuid` (`menuid`),
  CONSTRAINT `chitietmenu_ibfk_1` FOREIGN KEY (`menuid`) REFERENCES `menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietmenu`
--

LOCK TABLES `chitietmenu` WRITE;
/*!40000 ALTER TABLE `chitietmenu` DISABLE KEYS */;
/*!40000 ALTER TABLE `chitietmenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaKhachHang` int DEFAULT NULL,
  `NgayDat` date DEFAULT NULL,
  `TrangThaiDonHang` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaKhachHang` (`MaKhachHang`),
  CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`MaKhachHang`) REFERENCES `khachhang` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donhang`
--

LOCK TABLES `donhang` WRITE;
/*!40000 ALTER TABLE `donhang` DISABLE KEYS */;
INSERT INTO `donhang` VALUES (1,1,'2022-12-30',1),(2,2,'2022-10-05',1),(3,3,'2022-10-10',1),(4,1,'2022-12-30',1),(5,1,'2022-12-30',1),(6,1,'2022-12-30',1),(7,1,'2022-12-30',1),(8,1,'2022-12-30',1),(9,1,'2022-12-30',1),(10,1,'2022-12-30',1),(11,1,'2023-12-30',1),(12,1,'2023-12-31',1),(13,1,'2023-12-31',1),(14,1,'2023-12-31',1),(15,1,'2023-12-31',1),(16,1,'2023-12-31',1),(17,1,'2023-12-31',1),(18,1,'2023-12-31',1),(19,1,'2023-12-31',1),(20,1,'2023-12-31',1),(21,1,'2023-12-31',1),(22,1,'2023-12-31',1),(23,1,'2023-12-31',1),(24,1,'2023-12-31',1),(25,1,'2023-12-31',1),(26,1,'2023-12-31',1),(27,1,'2023-12-31',1),(28,1,'2023-12-31',1),(29,1,'2024-01-01',1),(30,1,'2024-01-01',1),(31,1,'2024-01-01',1),(32,1,'2024-01-01',1),(33,1,'2024-01-01',1),(34,1,'2024-01-01',1),(35,1,'2024-01-01',1),(36,1,'2024-01-01',1),(37,1,'2024-01-01',1),(38,1,'2024-01-01',1),(39,1,'2024-01-01',1),(40,1,'2024-01-01',1);
/*!40000 ALTER TABLE `donhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donvitinh`
--

DROP TABLE IF EXISTS `donvitinh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donvitinh` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenDonViTinh` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donvitinh`
--

LOCK TABLES `donvitinh` WRITE;
/*!40000 ALTER TABLE `donvitinh` DISABLE KEYS */;
INSERT INTO `donvitinh` VALUES (1,'Cái'),(2,'Chiếc'),(3,'Bộ'),(4,'Đôi'),(5,'Hộp'),(6,'Cây'),(7,'Gói'),(8,'Bình'),(9,'Chai'),(10,'Cặp');
/*!40000 ALTER TABLE `donvitinh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giamgia`
--

DROP TABLE IF EXISTS `giamgia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giamgia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `PhanTram` float DEFAULT NULL,
  `ThoiGianBatDau` date DEFAULT NULL,
  `ThoiGianKetThuc` date DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `giamgia_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giamgia`
--

LOCK TABLES `giamgia` WRITE;
/*!40000 ALTER TABLE `giamgia` DISABLE KEYS */;
INSERT INTO `giamgia` VALUES (13,57,10,'2023-12-13','2024-12-13',1),(14,72,50,'2023-12-13','2024-12-13',1);
/*!40000 ALTER TABLE `giamgia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giasanpham`
--

DROP TABLE IF EXISTS `giasanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giasanpham` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaSanPham` int DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `Gia` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaSanPham` (`MaSanPham`),
  CONSTRAINT `giasanpham_ibfk_1` FOREIGN KEY (`MaSanPham`) REFERENCES `sanpham` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giasanpham`
--

LOCK TABLES `giasanpham` WRITE;
/*!40000 ALTER TABLE `giasanpham` DISABLE KEYS */;
INSERT INTO `giasanpham` VALUES (53,57,'2023-12-01','2024-03-01',281200),(54,58,'2023-12-01','2024-03-01',434699),(55,59,'2023-12-01','2024-03-01',108999),(66,72,'2023-12-11','2024-03-11',498838),(67,73,'2023-12-16','2024-04-01',37000),(68,74,'2023-12-16','2024-04-01',32472),(71,77,'2024-01-01','2024-04-01',100000),(72,78,'2024-01-01','2024-04-01',50000),(73,79,'2024-01-01','2024-04-01',100000),(74,80,'2024-01-01','2024-04-01',59000),(75,81,'2024-01-01','2024-04-01',138000),(76,82,'2024-01-01','2024-04-01',100000);
/*!40000 ALTER TABLE `giasanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonnhap`
--

DROP TABLE IF EXISTS `hoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonnhap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `SoHoaDonNhap` varchar(50) DEFAULT NULL,
  `NgayNhap` date DEFAULT NULL,
  `MaNhanVien` int DEFAULT NULL,
  `MaNhaCungCap` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaNhanVien` (`MaNhanVien`),
  KEY `MaNhaCungCap` (`MaNhaCungCap`),
  CONSTRAINT `hoadonnhap_ibfk_1` FOREIGN KEY (`MaNhanVien`) REFERENCES `nhanvien` (`id`),
  CONSTRAINT `hoadonnhap_ibfk_2` FOREIGN KEY (`MaNhaCungCap`) REFERENCES `nhacungcap` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonnhap`
--

LOCK TABLES `hoadonnhap` WRITE;
/*!40000 ALTER TABLE `hoadonnhap` DISABLE KEYS */;
INSERT INTO `hoadonnhap` VALUES (1,'HDN001','2023-12-27',1,1),(2,'HDN002','2023-12-27',2,2),(3,'HDN003','2023-12-27',3,3);
/*!40000 ALTER TABLE `hoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonxuat`
--

DROP TABLE IF EXISTS `hoadonxuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonxuat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `NgayXuat` date DEFAULT NULL,
  `MaKhachHang` int DEFAULT NULL,
  `MaNhanVien` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaKhachHang` (`MaKhachHang`),
  KEY `MaNhanVien` (`MaNhanVien`),
  CONSTRAINT `hoadonxuat_ibfk_1` FOREIGN KEY (`MaKhachHang`) REFERENCES `khachhang` (`id`),
  CONSTRAINT `hoadonxuat_ibfk_2` FOREIGN KEY (`MaNhanVien`) REFERENCES `nhanvien` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonxuat`
--

LOCK TABLES `hoadonxuat` WRITE;
/*!40000 ALTER TABLE `hoadonxuat` DISABLE KEYS */;
INSERT INTO `hoadonxuat` VALUES (1,'2023-10-15',1,1),(2,'2023-10-20',2,2),(3,'2023-10-25',3,3);
/*!40000 ALTER TABLE `hoadonxuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenKhachHang` varchar(250) DEFAULT NULL,
  `DiaChi` varchar(1500) DEFAULT NULL,
  `SDT` varchar(50) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Khách hàng 1','123 Đường X, Quận 1, TP.HCM','0123456789','customer1@example.com'),(2,'Khách hàng 2','456 Đường Y, Quận 2, TP.HCM','0987654321','customer2@example.com'),(3,'Khách hàng 3','789 Đường Z, Quận 3, TP.HCM','0123456789','customer3@example.com'),(4,'Khách hàng 4','101 Đường W, Quận 4, TP.HCM','0987654321','customer4@example.com'),(5,'Khách hàng 5','202 Đường V, Quận 5, TP.HCM','0123456789','customer5@example.com'),(6,'Khách hàng 6','303 Đường U, Quận 6, TP.HCM','0987654321','customer6@example.com'),(7,'Khách hàng 7','404 Đường T, Quận 7, TP.HCM','0123456789','customer7@example.com'),(8,'Khách hàng 8','505 Đường S, Quận 8, TP.HCM','0987654321','customer8@example.com'),(9,'Khách hàng 9','606 Đường R, Quận 9, TP.HCM','0123456789','customer9@example.com'),(10,'Khách hàng 10','707 Đường Q, Quận 10, TP.HCM','0987654321','customer10@example.com');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kho`
--

DROP TABLE IF EXISTS `kho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenKho` varchar(250) DEFAULT NULL,
  `DiaChi` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kho`
--

LOCK TABLES `kho` WRITE;
/*!40000 ALTER TABLE `kho` DISABLE KEYS */;
INSERT INTO `kho` VALUES (1,'Kho A','123 Đường Kho, Thành phố A'),(2,'Kho B','456 Đường Kho, Thành phố B'),(3,'Kho C','789 Đường Kho, Thành phố C');
/*!40000 ALTER TABLE `kho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khuyenmai`
--

DROP TABLE IF EXISTS `khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khuyenmai` (
  `id` int NOT NULL,
  `TenKhuyenMai` varchar(250) DEFAULT NULL,
  `MoTa` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khuyenmai`
--

LOCK TABLES `khuyenmai` WRITE;
/*!40000 ALTER TABLE `khuyenmai` DISABLE KEYS */;
INSERT INTO `khuyenmai` VALUES (1,'Sale mùa hè','Giảm giá cho tất cả sản phẩm mùa hè'),(2,'Black Friday','Chương trình giảm giá đặc biệt vào Black Friday');
/*!40000 ALTER TABLE `khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kiemkho`
--

DROP TABLE IF EXISTS `kiemkho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kiemkho` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaNhanVien` int DEFAULT NULL,
  `ThoiGianBatDau` date DEFAULT NULL,
  `ThoiGianKetThuc` date DEFAULT NULL,
  `TrangThaiKho` int DEFAULT NULL,
  `MaKho` int DEFAULT NULL,
  `MoTa` text,
  PRIMARY KEY (`id`),
  KEY `MaNhanVien` (`MaNhanVien`),
  KEY `MaKho` (`MaKho`),
  CONSTRAINT `kiemkho_ibfk_1` FOREIGN KEY (`MaNhanVien`) REFERENCES `nhanvien` (`id`),
  CONSTRAINT `kiemkho_ibfk_2` FOREIGN KEY (`MaKho`) REFERENCES `kho` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kiemkho`
--

LOCK TABLES `kiemkho` WRITE;
/*!40000 ALTER TABLE `kiemkho` DISABLE KEYS */;
INSERT INTO `kiemkho` VALUES (1,1,'2023-10-01','2023-10-15',1,1,'Kiểm kho tháng 10'),(2,2,'2023-10-05','2023-10-20',1,2,'Kiểm kho tháng 10'),(3,3,'2023-10-10','2023-10-25',1,3,'Kiểm kho tháng 10');
/*!40000 ALTER TABLE `kiemkho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaisanpham`
--

DROP TABLE IF EXISTS `loaisanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaisanpham` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaLoai_Cha` varchar(255) DEFAULT NULL,
  `TenLoai` varchar(250) DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisanpham`
--

LOCK TABLES `loaisanpham` WRITE;
/*!40000 ALTER TABLE `loaisanpham` DISABLE KEYS */;
INSERT INTO `loaisanpham` VALUES (11,NULL,'Áo',1),(12,NULL,'Quần',1),(13,NULL,'Váy',1),(14,NULL,'Phụ Kiện',1),(15,NULL,'Giày',1),(16,NULL,'Bộ',1);
/*!40000 ALTER TABLE `loaisanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenMenu` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `urlMenu` varchar(250) DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (2,'Product','product',1),(3,'Cart','cart',1),(4,'Shop',NULL,1),(5,'Pages',NULL,1),(6,'Blog',NULL,0),(7,'Contract Us',NULL,0);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacungcap`
--

DROP TABLE IF EXISTS `nhacungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacungcap` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenNCC` varchar(250) DEFAULT NULL,
  `DiaChi` varchar(500) DEFAULT NULL,
  `SoDienThoai` char(20) DEFAULT NULL,
  `Email` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacungcap`
--

LOCK TABLES `nhacungcap` WRITE;
/*!40000 ALTER TABLE `nhacungcap` DISABLE KEYS */;
INSERT INTO `nhacungcap` VALUES (1,'Fashion Supplier 1','123 Đường A, Quận 1, TP.HCM','0123456789','supplier1@example.com'),(2,'Fashion Supplier 2','456 Đường B, Quận 2, TP.HCM','0987654321','supplier2@example.com'),(3,'Fashion Supplier 3','789 Đường C, Quận 3, TP.HCM','0123456789','supplier3@example.com'),(4,'Fashion Supplier 4','101 Đường D, Quận 4, TP.HCM','0987654321','supplier4@example.com'),(5,'Fashion Supplier 5','202 Đường E, Quận 5, TP.HCM','0123456789','supplier5@example.com'),(6,'Fashion Supplier 6','303 Đường F, Quận 6, TP.HCM','0987654321','supplier6@example.com'),(7,'Fashion Supplier 7','404 Đường G, Quận 7, TP.HCM','0123456789','supplier7@example.com'),(8,'Fashion Supplier 8','505 Đường H, Quận 8, TP.HCM','0987654321','supplier8@example.com'),(9,'Fashion Supplier 9','606 Đường I, Quận 9, TP.HCM','0123456789','supplier9@example.com'),(10,'Fashion Supplier 10','707 Đường J, Quận 10, TP.HCM','0987654321','supplier10@example.com');
/*!40000 ALTER TABLE `nhacungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `id` int NOT NULL AUTO_INCREMENT,
  `HoTen` varchar(250) DEFAULT NULL,
  `NgaySinh` date DEFAULT NULL,
  `GioiTinh` varchar(20) DEFAULT NULL,
  `AnhDaiDien` varchar(500) DEFAULT NULL,
  `DiaChi` varchar(1500) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `DienThoai` char(20) DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (1,'Nguyễn Thị Thúy','1985-03-15','Nữ','thuy.jpg','123 Đường ABC, Thành phố A','thuy@example.com','0908-123-456',1),(2,'Trần Văn Lợi','1980-05-20','Nam','loi.jpg','456 Đường XYZ, Thành phố B','loi@example.com','0900-456-789',1),(3,'Lê Hồng Quân','1990-12-10','Nam','quan.jpg','789 Đường DEF, Thành phố C','quan@example.com','0901-987-654',1);
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhasanxuat`
--

DROP TABLE IF EXISTS `nhasanxuat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhasanxuat` (
  `id` int NOT NULL AUTO_INCREMENT,
  `TenNSX` varchar(250) DEFAULT NULL,
  `MoTa` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhasanxuat`
--

LOCK TABLES `nhasanxuat` WRITE;
/*!40000 ALTER TABLE `nhasanxuat` DISABLE KEYS */;
INSERT INTO `nhasanxuat` VALUES (1,'H&M','Hennes & Mauritz AB'),(2,'Zara','Inditex'),(3,'Mango','Punto Fa, S.L.'),(4,'Adidas','Adidas AG'),(5,'Nike','Nike, Inc.'),(6,'Gucci','Gucci Group'),(7,'Louis Vuitton','Louis Vuitton Malletier S.A.'),(8,'Chanel','Chanel S.A.'),(9,'Prada','Prada S.p.A.'),(10,'Calvin Klein','PVH Corp.');
/*!40000 ALTER TABLE `nhasanxuat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaLoai` int DEFAULT NULL,
  `TenSanPham` varchar(250) DEFAULT NULL,
  `MoTaSanPham` text,
  `MaNSX` int DEFAULT NULL,
  `MaDonViTinh` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaLoai` (`MaLoai`),
  KEY `MaNSX` (`MaNSX`),
  KEY `MaDonViTinh` (`MaDonViTinh`),
  KEY `TenSanPham` (`TenSanPham`),
  CONSTRAINT `sanpham_ibfk_1` FOREIGN KEY (`MaLoai`) REFERENCES `loaisanpham` (`id`),
  CONSTRAINT `sanpham_ibfk_2` FOREIGN KEY (`MaNSX`) REFERENCES `nhasanxuat` (`id`),
  CONSTRAINT `sanpham_ibfk_3` FOREIGN KEY (`MaDonViTinh`) REFERENCES `donvitinh` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (57,13,'Váy nhung đen tay dài','SẢN PHẨM ĐẾN TỪ THƯƠNG HIỆU THỜI TRANG THIẾT KẾ CAO CẤP ĐỘC QUYỀN \r\nChất liệu: nhung tăm \r\nMàu sắc: trẻ trung, thời thượng, tôn dáng\r\nLƯU Ý: - Màu sắc sp bên ngoài có thể chênh lệch khoảng 5% do hiệu ứng ánh sáng (có thể đậm hoặc nhạt hơn một chút)  \r\n            - Hoa văn - họa tiết sp có thể thay đổi tùy đợt hàng mới ra nhưng vẫn ĐẢM BẢO form dáng chuẩn như mẫu cũ vì vậy sp nhận được có thể thay đổi họa tiết đôi chút\r\nƯu điểm SP: \r\n- Chất vải nhung tăm, thấm hút mồ hôi, không bai, không xù, không dão.\r\nĐủ 4 size: \r\nSz S: từ 40kg-49kg\r\nSz M: từ 49kg-54kg\r\nSz L: từ 54kg-60kg\r\nSz XL: từ 60kg-66kg\r\n(Tùy thuộc vào chiều cao)\r\nVòng eo: \r\nSize S: 54 - 68\r\nSize M: 68 - 72\r\nSize L: 73 - 76\r\nSize XL: 77 - 81\r\nHướng dẫn SD: Giặt máy ở chế độ máy nhẹ nhàng hoặc giặt tay ',1,1),(58,13,'Váy Nữ Công Chúa','YU.Strore đảm bảo với khách hàng :\r\nChất lượng và Mẫu mã Sản phẩm giống với Hình ảnh.\r\nTrả hàng hoàn tiền 100% trong vòng 24h nếu sản phẩm bị lỗi.\r\nThời gian chuẩn bị hàng tối ưu và nhanh nhất\r\nMọi thắc mắc xin nhắn Chat để được shop hỗ trợ và tư vấn. ',2,1),(59,13,'Váy Emmi dress dáng dài chiết eo dáng dài','Váy Emmi dress dáng dài chiết eo dáng dài xixeoshop (kín lưng)\r\n\r\n\r\n\r\n- S (40-47kg) \r\n\r\n- M (48-53kg)\r\n\r\n- L (54-59kg)\r\n\r\n\r\n\r\n- Sản phẩm 100% giống mô tả. Hình ảnh sản phẩm là ảnh thật do shop tự chụp và giữ bản quyền hình ảnh\r\n\r\n- Xuất xứ: Váy được thiết kế và gia công bởi xixeoshop.\r\n\r\n- Bạn cũng có thể trả lại hàng nếu không thích mua nữa, shop cam kết hoàn 100% tiền sản phẩm cho bạn. \r\n\r\n- Hàng có sẵn nên thời gian giao hàng sẽ là tối ưu nhất\r\n\r\nDo màn hình và điều kiện ánh sáng khác nhau, màu sắc thực tế của sản phẩm có thể chênh lệch khoảng 3-5%\r\n\r\n\r\n\r\nxixeoshop xin cam kết với khách hàng: \r\n\r\n- Váy được đảm bảo chất lượng, dịch vụ tốt nhất, hàng được giao từ 1-3 ngày kể từ ngày đặt hàng\r\n\r\n- Váy giao hàng trên toàn quốc – ship COD\r\n\r\n- Váy đổi trả theo đúng quy định của Shopee.\r\n\r\n\r\n\r\n#vay #vaybabydoll #dambabydoll #vaybabydollđangdai #babydoll #dambabydolltrang #vaybabydolltrang #damtrang #vaytrang #vaybabydollden #vaydoi #xixeoshop #vaytaydai #damtaydai #vayhoanhi #damhoa #vayhoa #vayhoanhivintage #damdibien #vaydibien #damhoanhi #hoanhi #damduoica\r\n\r\n #vaythietke #damxoe #vintage #vayxoe #damxoe #setvay',5,1),(72,13,'Đầm Công Chúa Dự Tiệc Cưới Đuôi Nơ Lớn',' Chúng tôi tin rằng mỗi người đều có phong cách riêng biệt, và chúng tôi hy vọng rằng trang phục của chúng tôi có thể thể hiện cá tính và vẻ đẹp độc đáo của bạn.',1,1),(73,11,'ÁO GÂN PHỐI VOAN TAY BỒNG','SHOP QUẦN ÁO GIÁ RẺ ĐÂY ',1,2),(74,11,'Áo thun hồng tay lỡ thêu chữ may cánh HARI','Áo thun hồng tay lỡ thêu chữ may cánh HARI - Áo phông form rộng bánh bèo Pastel đẹp cá tính Ulzzang\r\nÁo thun thêu chứ, may cánh ngực và tay\r\nChất liệu: Cotton tixi\r\nMàu sắc: Hồng',5,1),(77,16,'Sét Bộ Đồ Nữ, Sét Tiểu Thư Nữ Hàn Quốc Áo Đính Nơ To Kèm Quần Short Đùi Chất Fort Cao Cấp','Hoàn Tiền nếu sản phẩm không giống mô tả.\r\nCam Kết hỗ trợ Đổi Trả nếu mặc không vừa.\r\nCam Kết giá rẻ so với thị trường đi kèm chất lượng tốt  do xưởng tự sản xuất.\r\nĐường may cẩn thận, chắc chắn.\r\nMàu sắc trang nhã, dễ phối kết hợp đồ.',6,10),(78,11,'Áo voan cổ vuông phối viền cổ nơ sau tiểu thư','Hãy follow shop để cập nhật mẫu mới nhất và hot nhất mỗi ngày \r\nChất liệu voan mềm mại co giãn tốt , thoáng mát\r\nThiết kế thời trang phù hợp xu hướng hiện nay\r\nKiểu dáng đa phong cách-Đường may tinh tế sắc sảo\r\nPhù hợp với người từ 55 kg đổ lại\r\nÁo  được kiểm tra hàng trước khi nhận ưng ý mới thanh toán nhận hàng .\r\nÁo được thiết kế vể đẹp trẻ trung năng động nhưng không kém phần duyên dáng.\r\nThiết kế đẹp, chuẩn form, đường may sắc xảo, vải voan mỏng mịn, thấm hút mồ hôi tạo sự thoải mái khi mặc!\r\nDễ dàng phối trang phục , thích hợp đi chơi đi làm đi dạo phố\r\nThích hợp cho sự kết hợp vứi quần jean, sọt,legging!\r\nCam kết : ship tận nơi, Nhận hàng mới trả tiền, ',6,1),(79,11,'Áo kiểu nữ, áo lụa cổ yếm cài hoa dáng ngắn croptop siêu xinh','☘️ Chất:Lụa thái cao cấp . Chất vải này do bên shop em tự đi chọn vải và gia công số lượng lớn để tối ưu chi phí nên khách bên em cứ yên tâm ạ. \r\n☘️ Form:  Freesize (40-58kg tùy chiều cao) \r\n(Vòng 1:  dưới 95cm.Vòng 2: dưới 75cm.Vòng 3 : Dưới 95cm)\r\n☘️ 1m50 – 1m55 từ 40 – 50kg  \r\n☘️ 1m55 – 1m6 từ 47 – 55kg \r\n☘️ Trên 1m6 từ 51kg – 58kg ',7,1),(80,11,'Áo Sơ Mi Kiểu Phong Cách Hàn Quốc Cổ Trụ Bèo Đính Nơ','Chất liệu voan cá mềm mại, thoáng mát\r\nThiết kế thời trang phù hợp xu hướng hiện nay\r\nKiểu dáng đa phong cách-Đường may tinh tế sắc sảo\r\nSize S,M,L phù hợp với người từ 55 kg đổ lại\r\nĐược kiểm tra hàng trước khi nhận ưng ý mới thanh toán nhận hàng .',5,1),(81,11,'Áo kiểu BH tay dài cổ vuông thắt nơ phối ren xinh xắn thời trang mới dành cho nữ','Phong cách: Ngọt ngào và tươi mát / đại học \r\nChi tiết kiểu trang phục: đường khâu \r\nPhiên bản trang phục: ôm \r\nChiều dài / Chiều dài tay: Kiểu ngắn / Tay dài \r\nCách mặc: mặc chui đầu \r\nChất vải: Bông \r\nKiểu cổ: Cổ vuông \r\nThích hợp cho: 18-28 \r\nCó hoặc không có xơ vải: Không có xơ vải \r\nKiểu tay: thông thường ',6,1),(82,13,'Váy Trắng Hoa Xốp Dây Yếm Chéo Cổ Vuông Dáng Tiểu Thư Siêu Xinh ','Váy Trắng Hoa Xốp Dây Yếm Chéo Cổ Vuông Dáng Tiểu Thư Siêu Xinh\r\nSản phẩm có kèm HÌNH THẬT VÀ VIDEO SHOP QUAY nhé ạ \r\nVáy trắng tiểu thư tay bồng, Váy trắng dự tiệc hoa văn xốp ',5,1);
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaNhanVien` int DEFAULT NULL,
  `TaiKhoan` varchar(100) DEFAULT NULL,
  `MatKhau` varchar(100) DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  `LoaiQuyen` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaNhanVien` (`MaNhanVien`),
  CONSTRAINT `taikhoan_ibfk_1` FOREIGN KEY (`MaNhanVien`) REFERENCES `nhanvien` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,1,'admin','1','2023-10-01',NULL,1,'admin'),(2,2,'ha1','1','2023-10-05',NULL,1,'staff'),(3,3,'hihi','1','2023-10-10',NULL,1,'staff'),(4,NULL,'cong','cong','2023-10-10',NULL,1,'customer');
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoankhachhang`
--

DROP TABLE IF EXISTS `taikhoankhachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoankhachhang` (
  `id` int NOT NULL AUTO_INCREMENT,
  `MaKhachHang` int DEFAULT NULL,
  `TaiKhoan` varchar(100) DEFAULT NULL,
  `MatKhau` varchar(100) DEFAULT NULL,
  `NgayBatDau` date DEFAULT NULL,
  `NgayKetThuc` date DEFAULT NULL,
  `TrangThai` int DEFAULT NULL,
  `LoaiQuyen` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaKhachHang` (`MaKhachHang`),
  CONSTRAINT `taikhoankhachhang_ibfk_1` FOREIGN KEY (`MaKhachHang`) REFERENCES `khachhang` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoankhachhang`
--

LOCK TABLES `taikhoankhachhang` WRITE;
/*!40000 ALTER TABLE `taikhoankhachhang` DISABLE KEYS */;
INSERT INTO `taikhoankhachhang` VALUES (5,1,'cong','1',NULL,NULL,1,'custumer');
/*!40000 ALTER TABLE `taikhoankhachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grimcy'
--
/*!50003 DROP PROCEDURE IF EXISTS `createProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createProduct`(IN P_MALOAI INT, IN P_TENSANPHAM 
VARCHAR(250), IN P_MOTASANPHAM TEXT, IN P_MANSX INT
, IN P_MADONVITINH INT )
BEGIN  
	INSERT INTO
	    sanpham (
	        MaLoai,
	        TenSanPham,
	        MoTaSanPham,
	        MaNSX,
	        MaDonViTinh
	    )
	VALUES (
	        p_MaLoai,
	        p_TenSanPham,
	        p_MoTaSanPham,
	        p_MaNSX,
	        p_MaDonViTinh
	    );
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct`(IN PRODUCTID INT)
BEGIN 

	DECLARE productExists INT;
	
	SELECT
	    COUNT(*) INTO productExists
	FROM sanpham
	WHERE id = productId;
	IF productExists > 0 THEN 
	DELETE FROM chitietanh WHERE MaSanPham = productId;
	DELETE FROM giasanpham WHERE MaSanPham = productId;
	DELETE FROM chitiethoadonxuat WHERE MaSanPham = productId;
	DELETE FROM chitiethoadonnhap WHERE MaSanPham = productId;
	DELETE FROM chitietkho WHERE MaSanPham = productId;
	DELETE FROM chitietkhuyenmai WHERE MaSanPham = productId;
	DELETE FROM chitietkiemkho WHERE MaSanPham = productId;
	DELETE FROM giamgia WHERE MaSanPham = productId;
	DELETE FROM chitietdonhang WHERE MaSanPham = productId;
	
	DELETE FROM sanpham WHERE id = productId;
	SELECT 'Xóa sản phẩm thành công.' AS Result;
	ELSE SELECT 'Sản phẩm không tồn tại.' AS Result;
	END IF;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllBestSeller` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllBestSeller`(
)
BEGIN

SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    COUNT(ctdh.`SoLuong`) AS BestSellerNumber,
    cta.`Anh`,
    nsx.`TenNSX`,
    MAX(ctdh.SoLuong * ctdh.GiaMua) AS Total
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN chitietdonhang ctdh ON sp.`id` = ctdh.`MaSanPham`
    INNER JOIN donhang dh ON ctdh.`MaDonHang` = dh.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
GROUP BY
    sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllBestSeller3` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllBestSeller3`(
)
BEGIN

SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    COUNT(ctdh.`SoLuong`) AS BestSellerNumber,
    cta.`Anh`,
    nsx.`TenNSX`,
    MAX(ctdh.SoLuong * ctdh.GiaMua) AS Total
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN chitietdonhang ctdh ON sp.`id` = ctdh.`MaSanPham`
    INNER JOIN donhang dh ON ctdh.`MaDonHang` = dh.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
GROUP BY
    sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`
    LIMIT 3;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllCategory` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllCategory`()
BEGIN  
	SELECT id, `MaLoai_Cha`,`TenLoai`,`TrangThai` FROM loaisanpham;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllMaker` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllMaker`()
BEGIN  
	SELECT id,`TenNSX`,`MoTa` FROM nhasanxuat;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllMenu` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllMenu`()
BEGIN  
	SELECT * FROM menu WHERE `TrangThai` = 1;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllNewProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllNewProduct`()
BEGIN  
	SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN chitiethoadonnhap cthdn ON sp.`id` = cthdn.`MaSanPham`
    INNER JOIN hoadonnhap hdn ON cthdn.`MaHoaDonNhap` = hdn.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
WHERE
    hdn.`NgayNhap` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
    AND hdn.`NgayNhap` <= CURDATE()
ORDER BY sp.id ASC;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllNewProduct3` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllNewProduct3`()
BEGIN  
	SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN chitiethoadonnhap cthdn ON sp.`id` = cthdn.`MaSanPham`
    INNER JOIN hoadonnhap hdn ON cthdn.`MaHoaDonNhap` = hdn.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
WHERE
    hdn.`NgayNhap` >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
    AND hdn.`NgayNhap` <= CURDATE()
ORDER BY sp.id ASC
LIMIT 3;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllProduct`()
BEGIN  
	SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
    ORDER BY sp.id ASC
    ;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllSell` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllSell`(
)
BEGIN
SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`,
    gg.`PhanTram`,
    gg.`ThoiGianBatDau`,
    gg.`ThoiGianKetThuc`,
    ROUND(
        gsp.Gia - (gsp.Gia * (gg.PhanTram / 100))
    ) AS GiaSauGiam
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN GiamGia gg ON sp.`id` = gg.`MaSanPham`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1

WHERE
    NOW() BETWEEN gg.ThoiGianBatDau
    AND gg.ThoiGianKetThuc
    AND gg.TrangThai = 1
ORDER BY gg.PhanTram DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllSell3` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllSell3`(
)
BEGIN
SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`,
    gg.`PhanTram`,
    gg.`ThoiGianBatDau`,
    gg.`ThoiGianKetThuc`,
    ROUND(
        gsp.Gia - (gsp.Gia * (gg.PhanTram / 100))
    ) AS GiaSauGiam
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    INNER JOIN GiamGia gg ON sp.`id` = gg.`MaSanPham`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1

WHERE
    NOW() BETWEEN gg.ThoiGianBatDau
    AND gg.ThoiGianKetThuc
    AND gg.TrangThai = 1
ORDER BY gg.PhanTram DESC
LIMIT 3
;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAllUnit` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllUnit`()
BEGIN  
	SELECT id,`TenDonViTinh` FROM donvitinh;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getByIdProduct` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getByIdProduct`(IN `IDPRODUCT` INT)
BEGIN  
	SELECT
	    sp.`id`,
	    lsp.`TenLoai`,
	    sp.`TenSanPham`,
	    sp.`MoTaSanPham`,
	    gsp.`Gia`,
	    JSON_ARRAYAGG(cta.`Anh`) AS Anh,
	    nsx.`TenNSX`
	FROM sanpham sp
	    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
	    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
	    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
	    LEFT JOIN (
	        SELECT
	            cta.`MaSanPham`,
	            cta.`Anh`,
	            ROW_NUMBER() OVER (
	                PARTITION BY cta.`MaSanPham`
	                ORDER BY
	                    cta.`id`
	            ) AS row_num
	        FROM
	            chitietanh cta
	    ) cta ON sp.`id` = cta.`MaSanPham`
	WHERE sp.`id` = idProduct
	GROUP BY
	    sp.`id`,
	    lsp.`TenLoai`,
	    sp.`TenSanPham`,
	    sp.`MoTaSanPham`,
	    gsp.`Gia`,
	    nsx.`TenNSX`
	ORDER BY sp.`id` ASC;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `listImg` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `listImg`(IN `IDPRODUCT` INT)
BEGIN  
	SELECT
	    
        `Anh`
	FROM chitietanh cta
	    
	WHERE cta.`MaSanPham` = idProduct;
	END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `ProductDetail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `ProductDetail`(
`idProductDetail` INT
)
BEGIN
  SELECT
    DISTINCT sp.`id`,
    lsp.`TenLoai`,
    sp.`TenSanPham`,
    sp.`MoTaSanPham`,
    gsp.`Gia`,
    cta.`Anh`,
    nsx.`TenNSX`
FROM sanpham sp
    INNER JOIN loaisanpham lsp ON sp.`MaLoai` = lsp.`id`
    INNER JOIN giasanpham gsp ON sp.`id` = gsp.`MaSanPham`
    INNER JOIN nhasanxuat nsx ON sp.`MaNSX` = nsx.`id`
    LEFT JOIN (
        SELECT
            cta.`MaSanPham`,
            cta.`Anh`,
            ROW_NUMBER() OVER (
                PARTITION BY cta.`MaSanPham`
                ORDER BY
                    cta.`id`
            ) AS row_num
        FROM
            chitietanh cta
    ) cta ON sp.`id` = cta.`MaSanPham`
    AND cta.`row_num` = 1
WHERE sp.id = idProductDetail;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-02 10:16:11
