const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMarketplaceProduct = async () => {
    return await prisma.marketplace_product.findMany({
        include: {
            marketplace: true,
            varian_barang: true,
        },
    });
};

const getMarketplaceProductById = async (id) => {
    return await prisma.marketplace_product.findUnique({
        where: {
            id_mapping: parseInt(id),
        },
        include: {
            marketplace: true,
            varian_barang: true,
        },
    });
};

const createMarketplaceProduct = async (data) => {
    return await prisma.marketplace_product.create({
        data,
    });
};

const updateMarketplaceProduct = async (id, data) => {
    return await prisma.marketplace_product.update({
        where: {
            id_mapping: parseInt(id),
        },
        data,
    });
};

const deleteMarketplaceProduct = async (id) => {
    return await prisma.marketplace_product.delete({
        where: {
            id_mapping: parseInt(id),
        },
    });
};

const syncStok = async (id_varian) => {
    const mappings = 
    await prisma.marketplace_product.findMany({
        where: {
            id_varian: parseInt(id_varian),
        },
        include: {
            marketplace: true,
            varian_barang: true,
        }
    });

    if(mappings.length === 0){
        throw new Error(
            "Produk Belum terhubung ke marketplace"
        );
    }
    return {
        stok: mappings[0].varian_barang.stok,
        marketplace: 
        mappings.map(
            m => m.marketplace.nama_marketplace
        )
    };
};

const importOrder = async (data) => {

    const mapping =
    await prisma.marketplace_product.findFirst({
        where: {
            external_sku: data.external_sku
        },
        include: {
            marketplace: true,
            varian_barang: true
        }
    });

    if(!mapping){
        throw new Error("SKU tidak ditemukan");
    }

    const varian = mapping.varian_barang;

    if(varian.stok < data.qty){
        throw new Error("Stok tidak mencukupi");
    }

    const stokSebelum = varian.stok;
    const stokSesudah = stokSebelum - data.qty;

    await prisma.varian_barang.update({
        where: {
            id_varian: varian.id_varian
        },
        data: {
            stok: stokSesudah
        }
    });

    const penjualan =
    await prisma.penjualan.create({
        data: {
            no_nota: `MP-${Date.now()}`,
            tanggal_penjualan: new Date(),
            channel:
                mapping.marketplace.nama_marketplace.toLowerCase(),
            total:
                data.qty *
                Number(varian.harga_jual)
        }
    });

    await prisma.detail_penjualan.create({
        data: {
            id_penjualan:
                penjualan.id_penjualan,

            id_varian:
                varian.id_varian,

            qty:
                data.qty,

            harga:
                varian.harga_jual,

            subtotal:
                data.qty *
                Number(varian.harga_jual)
        }
    });

    await prisma.stok_log.create({
        data: {
            id_varian:
                varian.id_varian,

            tipe_transaksi:
                "PENJUALAN",

            qty:
                data.qty,

            stok_sebelum:
                stokSebelum,

            stok_sesudah:
                stokSesudah,

            referensi:
                `Marketplace-${penjualan.id_penjualan}`
        }
    });

    return {
        penjualan,
        stokSebelum,
        stokSesudah
    };
};

module.exports = {
    getMarketplaceProduct,
    getMarketplaceProductById,
    createMarketplaceProduct,
    updateMarketplaceProduct,
    deleteMarketplaceProduct,
    syncStok,
    importOrder
};