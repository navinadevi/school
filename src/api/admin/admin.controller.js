const Admin = require("../../models/admin");
const service = require("./admin.service");

const loginAdmin  = async (req, res) => {
    try {
        var admin = await Admin.findByCredential(req.body.email, req.body.password);
        var token = await admin.generateAuthToken();
        res.status(200).send({
            admin,
            token
        })
    } catch (e) {
        res.status(500).send("Unable To Login");
    }
}

const getAdmin = async (req, res) => {
    try{
        var admin = await service.getAdmin(req);
        res.status(200).send(admin);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const getAdminById = async (req, res) => {
    try{
        var admin = await service.getAdminById(req);
        res.status(200).send(admin);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const saveAdmin = async (req, res) => {
    try{
        var admin = await service.saveAdmin(req);
        res.status(201).send(admin);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const updateAdmin = async (req, res) => {
    try{
        var admin = await service.updateAdmin(req);
        res.status(201).send("Admin updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deleteAdmin = async (req, res) => {
    try{
        var admin = await service.deleteAdmin(req);
        res.status(201).send("Admin deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    loginAdmin,
    getAdmin,
    getAdminById,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}