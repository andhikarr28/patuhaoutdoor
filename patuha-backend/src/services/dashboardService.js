const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDashboard = async () => {
    const totalBarang = await prisma.barang.count();
    const totalVarian = await prisma.varian_barang.count();
    const totalSupplier = await prisma.supplier.count();
    const totalPenjualan = await prisma.penjualan.aggregate({
        _sum: {
            total: true,
        },
    });

    const totalPembelian = await prisma.pembelian.aggregate({
        _sum: {
            total_netto: true,
        },
    });

    const stokRendah = await prisma.varian_barang.count({
        where: {
            stok: {
                lte: 3,
            },
        },
    });

    return {
        totalBarang: totalBarang,
        totalVarian: totalVarian,
        totalSupplier: totalSupplier,
        totalPenjualan: totalPenjualan._sum.total || 0,
        totalPembelian: totalPembelian._sum.total_netto || 0,
        stokRendah: stokRendah,
    };
};

module.exports = {
    getDashboard,
};
