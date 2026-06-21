const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPenjualan = async () => {
    return await prisma.penjualan.findMany();
};

const getPenjualanById = async (id) => {
    return await prisma.penjualan.findUnique({
        where: {
            id_penjualan: parseInt(id)
        },
    });
};

const createPenjualan = async (data) => {
    return await prisma.penjualan.create({
        data: {
            ...data,
            tanggal_penjualan: new Date(data.tanggal_penjualan),
        },
    });
};

module.exports = {
    getPenjualan,
    getPenjualanById,
    createPenjualan
}