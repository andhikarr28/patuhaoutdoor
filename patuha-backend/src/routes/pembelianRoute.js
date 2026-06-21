const express = require("express");
const router = express.Router();
const pembelianController = require("../controllers/pembelianController");

router.get("/", pembelianController.getPembelian);
router.get("/:id", pembelianController.getPembelianById);
router.post("/", pembelianController.createPembelian);

module.exports = router;
