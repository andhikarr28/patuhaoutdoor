const barangService = require("../services/barangService");

exports.getBarang = async (req, res) => {
    const data = await barangService.getBarang();
    
    res.json(data);

};

exports.getBarangById = async (req, res) => {
    const data = await barangService.getBarangById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Barang Tidak Ditemukan",
        });
    }
    
    res.json(data);

};

exports.createBarang = async (req,res) => {
    const data = await barangService.createBarang(req.body);
    
    res.status(201).json(data);
};

exports.updateBarang = async (req,res) => {
    const data = await barangService.updateBarang(
        req.params.id,
        req.body
    );

    res.json(data);
};

exports.deleteBarang = async (req,res) => {
    await barangService.deleteBarang(req.params.id);

    res.json({
        message: "Barang Berhasil Dihapus",
    });
};