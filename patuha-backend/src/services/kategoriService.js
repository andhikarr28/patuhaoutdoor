const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getKategori = async () => {
    return await prisma.kategori.findMany();
};

const getKategoriById = async (id) => {
    return await prisma.kategori.findUnique({
        where: {
            id_kategori: parseInt(id),
        },
    });
};

const createKategori = async (nama_kategori) => {
    return await prisma.kategori.create({
        data: {
            nama_kategori,
        },
    });
};

const updateKategori = async (id, nama_kategori) => {
    return await prisma.kategori.update({
        where: {
            id_kategori: parseInt(id),
        },
        data: {
            nama_kategori,
        },
    });
};

const deleteKategori = async (id) => {
    return await prisma.kategori.delete({
        where: {
            id_kategori: parseInt(id),
        },
    });
}


module.exports = {
        getKategori,
        getKategoriById,
        createKategori,
        updateKategori,
        deleteKategori,
};