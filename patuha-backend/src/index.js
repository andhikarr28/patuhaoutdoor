const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();

app.get("/", async (req, res) => {
    const kategori = await prisma.kategori.findMany();

    res.json(kategori);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});