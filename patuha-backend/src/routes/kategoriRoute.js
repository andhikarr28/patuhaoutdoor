const express = require("express");
const router = express.Router();
const kategoriController = require("../controllers/kategoriController");

router.get("/", kategoriController.getAllKategori);
router.post("/", kategoriController.createKategori);


module.exports = router;