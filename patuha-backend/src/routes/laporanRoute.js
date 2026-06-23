const express = require("express");
const router = express.Router();

const laporanController = require("../controllers/laporanController");
const { verifyToken } = require("../middleware/authMiddleware");

router.get(
    "/penjualan",
    verifyToken,
    laporanController.getLaporanPenjualan,
)

router.get(
    "/pembelian",
    verifyToken,
    laporanController.getLaporanPembelian,
)

router.get(
    "/stok-rendah",
    verifyToken,
    laporanController.getStokRendah
)

router.get(
    "/stok-log",
    verifyToken,
    laporanController.getStokLog
)

module.exports = router;