const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getVarian = async () => {
    return await prisma.varian_barang.findMany({
        include: {
            barang: true,
        },
    });
};

const getVarianById = async (id) => {
    return await prisma.varian_barang.findUnique({
        where: {
            id_varian: parseInt(id),
        }, include: {
            barang: true,
        },
    });
};

const createVarian = async (data) => {
    return await prisma.varian_barang.create({
        data,
    });
};

const updateVarian = async (id, data) => {
    return await prisma.varian_barang.update({
        where: {
            id_varian: parseInt(id),
        },
        data,
    });
};

const deleteVarian = async (id) => {
    return await prisma.varian_barang.delete({
        where: {
            id_varian: parseInt(id),
        },
    });
};

module.exports = {
    getVarian,
    getVarianById,
    createVarian,
    updateVarian,
    deleteVarian,
};
