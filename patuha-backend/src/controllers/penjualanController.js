const penjualanService = require("../services/penjualanService")

exports.getPenjualan = async (req, res) => {
    const data = await penjualanService.getPenjualan();

    res.json(data);
}

exports.getPenjualanById = async (req, res) => {
    const data = await penjualanService.getPenjualanById(req.params.id);

    if(!data){
       return res.status(404).json({
        message: "Data Penjualan Tidak Ditemukan"
       })
    }

    res.json(data);
};

exports.createPenjualan = async (req, res) => {
    const data = await penjualanService.createPenjualan(req.body);

    res.json(data);
};