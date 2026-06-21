const express = require("express");
const kategoriRoute = require("./routes/kategoriRoute");
const barangRoute = require("./routes/barangRoute");

const app = express();

app.use(express.json());

app.use("/api/kategori", kategoriRoute);
app.use("/api/barang", barangRoute);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});