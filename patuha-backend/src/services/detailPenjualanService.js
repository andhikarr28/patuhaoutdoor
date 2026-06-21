const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDetailPenjualan = async () => {
    return await prisma.detail_penjualan.findMany({
        include: {
            penjualan: true,
            varian_barang: true,
        },
    });
};

const getDetailPenjualanById = async (id) => {
    return await prisma.detail_penjualan.findUnique({
        where: {
            id_detail_penjualan: parseInt(id),
        },
        include: {
            penjualan: true,
            varian_barang: true,
        },
    });
};

const createDetailPenjualan = async (data) => {
    return await prisma.$transaction(async (tx) => {

        // 1. Validasi qty
        if (data.qty <= 0) {
            throw new Error("Qty harus lebih dari 0");
        }

        // 2. Cek varian
        const varian = await tx.varian_barang.findUnique({
            where: {
                id_varian: data.id_varian,
            },
        });

        if (!varian) {
            throw new Error("Varian tidak ditemukan");
        }

        // 3. Cek penjualan
        const penjualan = await tx.penjualan.findUnique({
            where: {
                id_penjualan: data.id_penjualan,
            },
        });

        if (!penjualan) {
            throw new Error("Data penjualan tidak ditemukan");
        }

        const stokSebelum = varian.stok || 0;

        // 4. Validasi stok
        if (stokSebelum < data.qty) {
            throw new Error(
                `Stok tidak mencukupi. Stok tersedia ${stokSebelum}`
            );
        }

        const stokSesudah = stokSebelum - data.qty;

        // 5. Simpan detail penjualan
        const detail = await tx.detail_penjualan.create({
            data,
        });

        // 6. Update stok
        await tx.varian_barang.update({
            where: {
                id_varian: data.id_varian,
            },
            data: {
                stok: stokSesudah,
            },
        });

        // 7. Simpan stok log
        await tx.stok_log.create({
            data: {
                id_varian: data.id_varian,
                tipe_transaksi: "PENJUALAN",
                qty: data.qty,
                stok_sebelum: stokSebelum,
                stok_sesudah: stokSesudah,
                referensi: `Penjualan-${data.id_penjualan}`,
            },
        });

        // 8. Warning stok minimum
        if (
            varian.stok_minimum &&
            stokSesudah <= varian.stok_minimum
        ) {
            console.log(
                `WARNING: Stok SKU ${varian.sku} di bawah minimum (${stokSesudah})`
            );
        }

        return detail;
    });
};

module.exports = {
    getDetailPenjualan,
    getDetailPenjualanById,
    createDetailPenjualan,
};