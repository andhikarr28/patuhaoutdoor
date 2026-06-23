const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

const getUser = async () => {
    return await prisma.users.findMany();
};

const getUserById = async (id) => {
    return await prisma.users.findUnique({
        where: {
            id_user: parseInt(id)
        },
    });
};

const createUser = async (data) => {
    const hashedPassword = await bcrypt.hash(
        data.password,
        10
    );

    return await prisma.users.create({
        data: {
            username: data.username,
            password: hashedPassword,
            nama_lengkap: data.nama_lengkap,
            role: data.role
        }
    });
};

const updateUser = async (id, data) => {
    if(data.password){
        data.password = await bcrypt.hash(
            data.password,
            10
        );
    };
    
    return await prisma.users.update({
        where: {
            id_user: parseInt(id),
        },
        data,
    });
};

const deleteUser = async (id) => {
    return await prisma.users.delete({
        where: {
            id_user: parseInt(id),
        },
    });
};

module.exports = {
    getUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}