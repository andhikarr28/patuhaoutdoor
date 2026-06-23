const express = require("express");
const router = express.Router();

const marketplaceController = require("../controllers/marketplaceController");

router.get("/", marketplaceController.getMarketplace);
router.get("/:id", marketplaceController.getMarketplaceById);
router.post("/", marketplaceController.createMarketplace);
router.post(
    "/:id/sync",
    marketplaceController.syncMarketplace
);
router.put("/:id", marketplaceController.updateMarketplace);
router.delete("/:id", marketplaceController.deleteMarketplace);

module.exports = router;