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
    const result = await prisma.$transaction(async (tx) => {
        //1. Simpan detail Pembelian
        const detail = await tx.detail_pembelian.create({
            data,
        });

        //2. Ambil data varian
        const varian = await tx.varian_barang.findUnique({
            where: {
                id_varian: data.id_varian,
            },
        });

        if(!varian){
            throw new Error("Varian Tidak Ditemukan");
        }

        const stokSebelum = varian.stok || 0;
        const stokSesudah = stokSebelum + data.qty;

        //3. Update stok
        await tx.varian_barang.update({
            where: {
                id_varian: data.id_varian,
            },
            data: {
                stok: stokSesudah,
            },
        });

        //4. Simpan log stok

        await tx.stok_log.create({
            data:{
                id_varian: data.id_varian,
                tipe_transaksi: "PEMBELIAN",
                qty: data.qty,
                stok_sebelum: stokSebelum,
                stok_sesudah: stokSesudah,
                referensi: `Pembelian-${data.id_pembelian}`,
            },
        });

        return detail;
    });
    return result;
};

module.exports = {
    getDetailPembelian,
    getDetailPembelianById,
    createDetailPembelian
}
