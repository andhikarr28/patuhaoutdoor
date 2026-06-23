const laporanService = require("../services/laporanService");

exports.getLaporanPenjualan = async (req, res) => {
    try{
        const data = await laporanService.getLaporanPenjualan();
        
        res.json(data);
    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    };
};

exports.getLaporanPembelian = async (req, res) => {
    try{
        const data = await laporanService.getLaporanPembelian();
        
        res.json(data);
    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    };
};

exports.getStokRendah = async (req, res) => {
    try{
        const data = await laporanService.getStokRendah();
        
        res.json(data);
    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    };
};

exports.getStokLog = async (req, res) => {
    try{
        const data = await laporanService.getStokLog();
        
        res.json(data);
    } catch(error){
        res.status(500).json({
            message: error.message,
        });
    };
};



