const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSupplier = async () => {
    return await prisma.supplier.findMany();
};

const getSupplierById = async (id) => {
    return await prisma.supplier.findUnique({
        where: {
            id_supplier: parseInt(id)
        },
    });
};

const createSupplier = async (data) => {
    return await prisma.supplier.create({
        data,
    });
};

const updateSupplier = async (id, data) => {
    return await prisma.supplier.update({
        where: {
            id_supplier: parseInt(id),
        },
        data,
    });
};

const deleteSupplier = async (id) => {
    return await prisma.supplier.delete({
        where: {
            id_supplier: parseInt(id),
        },
    });
};


module.exports = {
    getSupplier,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
};