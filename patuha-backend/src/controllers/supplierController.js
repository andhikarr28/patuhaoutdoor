const supplierService = require("../services/supplierService");

exports.getSupplier = async (req, res) => {
    const data = await supplierService.getSupplier();

    res.json(data);
};

exports.getSupplierById = async (req, res) => {
    const data = await supplierService.getSupplierById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Supplier Tidak Ditemukan"
        });
    }
    res.json(data);
};

exports.createSupplier = async (req, res) => {
    const data = await supplierService.createSupplier(req.body);

    res.json(data);
};

exports.updateSupplier = async (req, res) => {
    const data = await supplierService.updateSupplier(
        req.params.id,
        req.body
    );

    res.json(data);
}

exports.deleteSupplier = async (req, res) => {
    await supplierService.deleteSupplier(req.params.id);

    res.json({
        message: "Supplier Berhasil Dihapus"
    });
};
