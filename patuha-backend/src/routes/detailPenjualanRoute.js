const express = require("express");
const router = express.Router();
const detailPenjualanController = require("../controllers/detailPenjualanController");

router.get("/", detailPenjualanController.getDetailPenjualan);
router.get("/:id", detailPenjualanController.getDetailPenjualanById);
router.post("/", detailPenjualanController.createDetailPenjualan);

module.exports = router;