const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getLaporanPenjualan = async () => {
    return await prisma.penjualan.findMany({
        include:{
            detail_penjualan:{
                include: {
                    varian_barang: true,
                },
            },
        },
        orderBy: {
            tanggal_penjualan: "desc",
        },
    });
};

const getLaporanPembelian = async () => {
    return await prisma.pembelian.findMany({
        include: {
            supplier: true,
            detail_pembelian: {
                include: {
                    varian_barang: true,
                },
            },
        },
        orderBy: {
            tanggal_pembelian: "desc",
        },
    });
};

const getStokRendah = async () => {
    return await prisma.varian_barang.findMany({
        where: {
            stok: {
                lte: 3,
            },
        },
        include: {
            barang: true,
        },
    });
};

const getStokLog = async () => {
    return await prisma.stok_log.findMany({
        include: {
            varian_barang: true,
        },
        orderBy: {
            created_at: "desc",
        },
    });
};

module.exports = {
    getLaporanPenjualan,
    getLaporanPembelian,
    getStokRendah,
    getStokLog
    
}