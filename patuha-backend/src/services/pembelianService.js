const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPembelian = async () => {
    return await prisma.pembelian.findMany({
        include: {
            supplier: true,
            users: true,
        },
    });
};

const getPembelianById = async (id) => {
    return await prisma.pembelian.findUnique({
        where: {
            id_pembelian: parseInt(id),
        },
        include: {
            supplier: true,
            users: true,
        },
    });
};

const createPembelian = async (data) => {
    return await prisma.pembelian.create({
        data: {
            ...data,
            tanggal_pembelian: new Date(data.tanggal_pembelian)
        }
    });
};

module.exports = {
    getPembelian,
    getPembelianById,
    createPembelian
}