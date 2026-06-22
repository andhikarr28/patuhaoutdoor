const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const login = async (username, password) => {

    const user = await prisma.users.findUnique({
        where: {
            username,
        },
    });

    if (!user) {
        throw new Error("User tidak ditemukan");
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );

    if (!isMatch) {
        throw new Error("Password Salah");
    }

    const token = jwt.sign(
        {
            id_user: user.id_user,
            username: user.username,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );

    return {
        token,
        user: {
            id_user: user.id_user,
            username: user.username,
            nama_lengkap: user.nama_lengkap,
            role: user.role,
        },
    };
};

module.exports = {
    login,
};