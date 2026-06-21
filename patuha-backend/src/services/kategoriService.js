const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllKategori = async () => {
  return await prisma.kategori.findMany();
};

const createKategori = async (nama_kategori) => {
  return await prisma.kategori.create({
    data: {
      nama_kategori,
    },
  });
};

module.exports = {
  getAllKategori,
    createKategori,
};