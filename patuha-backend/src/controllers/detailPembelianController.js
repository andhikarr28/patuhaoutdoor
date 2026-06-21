const detailPembelianService = require("../services/detailPembelianService");

exports.getPembelian = async (req, res) => {
    const data = await detailPembelianService.getDetailPembelian();

    res.json(data);
};

exports.getDetailPembelianById = async (req, res) => {
    const data = await detailPembelianService.getDetailPembelianById(req.params.id);

    if(!data){
        res.status(404).json({
            message: "Detail Pembelian Tidak Ditemukan"
        });
    }
    res.json(data);
};

exports.createPembelian = async (req, res) => {
    const data = await detailPembelianService.createDetailPembelian(req.body);

    res.status(201).json(data);
};