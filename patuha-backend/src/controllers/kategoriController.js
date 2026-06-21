const kategoriService = require("../services/kategoriService");

exports.getAllKategori = async (req, res) => {
  const data = await kategoriService.getAllKategori();
  res.json(data);
};

exports.getAllKategoriById = async (req, res) => {
    const data = await kategoriService.getKategoriById(req.params.id);
    if(!data){
        return res.status(404).json({
            message: "Kategori Tidak Ditemukan",
        });
    }

    res.json(data);
}

exports.createKategori = async (req, res) => {
  const { nama_kategori } = req.body;

  const data = await kategoriService.createKategori(
    nama_kategori
  );

  res.status(201).json(data);
};

exports.updateKategori = async (req,res) => {
    const { nama_kategori } = req.body;
    const data = await kategoriService.updateKategori(
        req.params.id,
        nama_kategori
    );

    res.json(data);
};

exports.deleteKategori = async (req,res) => {
    await kategoriService.deleteKategori(req.params.id);
    res.json({
        message: "Kategori Berhasil Dihapus",
    });
};