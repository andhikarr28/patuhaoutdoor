const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getBarang = async () => {
    return await prisma.barang.findMany({
        include: {
            kategori: true,
        },
    });
};

const getBarangById = async (id) => {
    return await prisma.barang.findUnique({
        where: {
            id_barang: parseInt(id),
        },
        include: {
            kategori: true,
        },
    });
};

const createBarang = async (data) => {
    return await prisma.barang.create({
        data,
    });
};

const updateBarang = async (id, data) => {
    return await prisma.barang.update({
        where: {
            id_barang: parseInt(id),
        },
        data,
    });
};

const deleteBarang = async (id) => {
    return await prisma.barang.delete({
        where: {
            id_barang: parseInt(id),
        },
    });
};

module.exports = {
    getBarang,
    getBarangById,
    createBarang,
    updateBarang,
    deleteBarang,
}