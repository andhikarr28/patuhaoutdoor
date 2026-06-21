const express = require("express");
const router = express.Router();
const detailPembelianController = require("../controllers/detailPembelianController");

router.get("/", detailPembelianController.getPembelian);
router.get("/:id", detailPembelianController.getDetailPembelianById);
router.post("/", detailPembelianController.createPembelian);

module.exports = router;