const express = require("express");
const kategoriRoute = require("./routes/kategoriRoute");
const barangRoute = require("./routes/barangRoute");
const varianRoute = require("./routes/varianRoute");
const supplierRoute = require("./routes/supplierRoute");
const pembelianRoute = require("./routes/pembelianRoute");
const detailPembelianRoute = require("./routes/detailPembelianRoute");

const app = express();

app.use(express.json());

app.use("/api/kategori", kategoriRoute);
app.use("/api/barang", barangRoute);
app.use("/api/varian", varianRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/pembelian", pembelianRoute);
app.use("/api/detailPembelian", detailPembelianRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});