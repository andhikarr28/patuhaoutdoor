const express = require("express");
const router = express.Router();

const marketplaceProductController = require("../controllers/marketplaceProductController");

router.get(
    "/",
    marketplaceProductController.getMarketplaceProduct
);

router.get(
    "/:id",
    marketplaceProductController.getMarketplaceProductById
);

router.post(
    "/",
    marketplaceProductController.createMarketplaceProduct
);

router.put(
    "/:id",
    marketplaceProductController.updateMarketplaceProduct
);

router.delete(
    "/:id",
    marketplaceProductController.deleteMarketplaceProduct
);

router.post(
    "/sync/:id",
    marketplaceProductController.syncStock
);

router.post(
    "/import-order",
    marketplaceProductController.importOrder
);

module.exports = router;