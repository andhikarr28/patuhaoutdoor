const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDetailPembelian = async () => {
    return await prisma.detail_pembelian.findMany({
        include: {
            pembelian: true,
            varian_barang: true,
        },
    });
};

const getDetailPembelianById = async (id) => {
    return await prisma.detail_pembelian.findUnique({
        where: {
            id_detail_pembelian: parseInt(id),
        },
        include: {
            pembelian: true,
            varian_barang: true,
        }
    });
};

const createDetailPembelian = async (data) => {
    return await prisma.detail_pembelian.create({
        data,
    });
};

module.exports = {
    getDetailPembelian,
    getDetailPembelianById,
    createDetailPembelian
}
