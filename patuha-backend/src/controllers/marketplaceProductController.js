const marketplaceProductService = require("../services/marketplaceProductService");

exports.getMarketplaceProduct = async (req, res) => {
    const data = await marketplaceProductService.getMarketplaceProduct();

    res.json(data);
};

exports.getMarketplaceProductById = async (req, res) => {
    const data = await marketplaceProductService.getMarketplaceProductById(
        req.params.id
    );

    if (!data) {
        return res.status(404).json({
            message: "Mapping tidak ditemukan",
        });
    }

    res.json(data);
};

exports.createMarketplaceProduct = async (req, res) => {
    const data = await marketplaceProductService.createMarketplaceProduct(
        req.body
    );

    res.status(201).json(data);
};

exports.updateMarketplaceProduct = async (req, res) => {
    const data = await marketplaceProductService.updateMarketplaceProduct(
        req.params.id,
        req.body
    );

    res.json(data);
};

exports.deleteMarketplaceProduct = async (req, res) => {
    await marketplaceProductService.deleteMarketplaceProduct(
        req.params.id
    );

    res.json({
        message: "Mapping berhasil dihapus",
    });
};

exports.syncStock = async (req,res) => {
    try {

        const result =
            await marketplaceProductService
                .syncStok(req.params.id);

        res.json({
            message:
                "Sinkronisasi berhasil",
            ...result
        });

    } catch(error){

        res.status(400).json({
            message: error.message
        });

    }
};

exports.importOrder = async (req,res) => {
    try {

        const result =
            await marketplaceProductService
                .importOrder(req.body);

        res.status(201).json(result);

    } catch(error){

        res.status(400).json({
            message: error.message
        });

    }
};