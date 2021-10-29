const Admin = require("../../models/admin");

const getAdmin = (req) => {
    try {
       return Admin.find(req.query);
    } catch(e) {
        return e;
    }
}

const saveAdmin = (req) => {
    try {
        var admin = new Admin(req.body)
        return admin.save()
    } catch(e) {
        return e;
    }
}

const updateAdmin = (req) => {
    try {
        return Admin.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteAdmin = (req) => {
    try {
        return Admin.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}