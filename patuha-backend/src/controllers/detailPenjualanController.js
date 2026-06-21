const detailPenjualanService = require("../services/detailPenjualanService");

exports.getDetailPenjualan = async (req, res) => {
    const data = await detailPenjualanService.getDetailPenjualan();

    res.json(data);
}

exports.getDetailPenjualanById = async (req, res) => {
    const data = await detailPenjualanService.getDetailPenjualanById(req.params.id);

    if(!data){
        res.status(404).json({
            message: "Detail Penjualan Tidak Ditemukan"
        });
    };

    res.json(data);
}

exports.createDetailPenjualan = async (req, res) => {
    const data = await detailPenjualanService.createDetailPenjualan(req.body);

    res.json(data);
}