const express = require("express");
const router = express.Router();

const varianController = require("../controllers/varianController");

router.get("/", varianController.getVarian);
router.get("/:id", varianController.getVarianById);
router.post("/", varianController.createVarian);
router.put("/:id", varianController.updateVarian);
router.delete("/:id", varianController.deleteVarian);

module.exports = router;