const marketplaceService = require("../services/marketplaceService");

exports.getMarketplace = async (req, res) => {
    const data = await marketplaceService.getMarketplace();

    res.json(data);
};

exports.getMarketplaceById = async (req, res) => {
    const data = await marketplaceService.getMarketplaceById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Marketplace Tidak Ditemukan",
        });
    }
    
    res.json(data);
};

exports.createMarketplace = async (req, res) => {
    const data = await marketplaceService.createMarketplace(
        req.body
    );

    res.status(201).json(data);
};

exports.updateMarketplace = async (req, res) => {
    const data = await marketplaceService.updateMarketplace(
        req.params.id,
        req.body
    );

    res.json(data);
};

exports.deleteMarketplace = async (req, res) => {
    await marketplaceService.deleteMarketplace(req.params.id);

    res.json({
        message: "Marketplace Berhasil Dihapus"
    })
};

exports.syncMarketplace = async (req, res) => {
    const data = await marketplaceService.syncMarketplace(
        req.params.id
    );

    res.json({
        message: "Marketplace berhasil disinkronkan",
        data,
    });
};