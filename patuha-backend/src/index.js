const express = require("express");
const kategoriRoute = require("./routes/kategoriRoute");
const barangRoute = require("./routes/barangRoute");
const varianRoute = require("./routes/varianRoute");
const supplierRoute = require("./routes/supplierRoute");
const pembelianRoute = require("./routes/pembelianRoute");
const detailPembelianRoute = require("./routes/detailPembelianRoute");
const penjualanRoute = require("./routes/penjualanRoute");
const detailPenjualanRoute = require("./routes/detailPenjualanRoute");
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const dashboardRoute = require("./routes/dashboardRoute");
const laporanRoute = require("./routes/laporanRoute")
const marketplaceRoute = require("./routes/marketplaceRoute");
const marketplaceProductRoute = require("./routes/marketplaceProductRoute")

const app = express();

app.use(express.json());

app.use("/api/kategori", kategoriRoute);
app.use("/api/barang", barangRoute);
app.use("/api/varian", varianRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/pembelian", pembelianRoute);
app.use("/api/detailPembelian", detailPembelianRoute);
app.use("/api/penjualan", penjualanRoute);
app.use("/api/detailPenjualan", detailPenjualanRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/laporan", laporanRoute);
app.use("/api/marketplace", marketplaceRoute);
app.use("/api/marketplace-product", marketplaceProductRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});