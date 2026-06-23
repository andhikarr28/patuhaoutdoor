const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getMarketplace = async () => {
    return await prisma.marketplace.findMany()
};

const getMarketplaceById = async (id) => {
    return await prisma.marketplace.findUnique({
        where: {
            id_marketplace: parseInt(id),
        }
    })
}

const createMarketplace = async (data) => {
    return await prisma.marketplace.create({
        data,
    });
};


const updateMarketplace = async (id, data) => {
    return await prisma.marketplace.update({
        where: {
            id_marketplace: parseInt(id),
        },
        data,
    })
};

const deleteMarketplace = async (id) => {
    return await prisma.marketplace.delete({
        where: {
            id_marketplace: parseInt(id),
        },
    });
};

const syncMarketplace = async (id) => {
    return await prisma.marketplace.update({
        where: {
            id_marketplace: parseInt(id),
        },
        data: {
            last_sync: new Date(),
            status: true,
        },
    });
};

module.exports = {
    getMarketplace,
    getMarketplaceById,
    createMarketplace,
    syncMarketplace,
    updateMarketplace,
    deleteMarketplace,
}