const kategoriService = require("../services/kategoriService");

exports.getAllKategori = async (req, res) => {
  const data = await kategoriService.getAllKategori();
  res.json(data);
};

exports.createKategori = async (req, res) => {
  const { nama_kategori } = req.body;

  const data = await kategoriService.createKategori(
    nama_kategori
  );

  res.status(201).json(data);
};