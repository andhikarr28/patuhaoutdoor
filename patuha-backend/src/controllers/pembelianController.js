const pembelianService = require("../services/pembelianService");

exports.getPembelian = async (req, res) => {
    const data = await pembelianService.getPembelian();

    res.json(data);
};

exports.getPembelianById = async (req, res) => {
    const data = await pembelianService.getPembelianById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Data Pembelian Tidak Ditemukan"
        });
    };
    res.json(data);
};

exports.createPembelian = async (req, res) => {
    console.log(req.body);

    const data = await pembelianService.createPembelian(req.body);

    res.json(data);
};