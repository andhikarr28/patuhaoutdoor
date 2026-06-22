const userService = require("../services/userService");

exports.getUser = async (req, res) => {
    const data = await userService.getUser();

    res.json(data);
};

exports.getUserById = async (req, res) => {
    const data = await userService.getUserById(req.params.id);

    if(!data){
        res.status(404).json({
            message: "User Tidak Ditemukan"
        });
    };
    res.json(data);
};

exports.createUser = async (req, res) => {
    const data = await userService.createUser(req.body);

    res.status(201).json(data);
}

exports.updateUser = async (req, res) => {
    const data = await userService.updateUser(
        req.params.id,
        req.body
    );

    res.json(data);
}

exports.deleteUser = async (req, res) => {
    const data = await userService.deleteUser(req.params.id);

    res.json({
        message: "User Berhasil Dihapus"
    })
}