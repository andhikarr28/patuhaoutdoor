const varianService = require("../services/varianService");

exports.getVarian = async (req, res) => {
    const data = await varianService.getVarian();

    res.json(data);
}

exports.getVarianById = async (req, res) => {
    const data = await varianService.getVarianById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Varian Tidak Ditemukan",

        });
    }
    res.json(data);
}

exports.createVarian = async (req,res) => {
    const data = await varianService.createVarian(req.body);

    res.status(201).json(data);
}

exports.updateVarian = async (req,res) => {
    const data = await varianService.updateVarian(
        req.params.id,
        req.body
    );
    res.json(data);
};

exports.deleteVarian = async (req,res) => {
    await varianService.deleteVarian(req.params.id);

    res.json({
        message: "Varian Berhasil Dihapus",
    });
};
