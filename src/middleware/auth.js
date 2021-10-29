const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

const auth = async (req, res, next) =>{
    try{
        var token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token,'thisisschooladmin');
        const admin = await Admin.findById(decoded._id);

        if(!admin){
            res.status(400).send("Unauthenticated");
            return;
        }

        req.admin = admin;
        next();

    } catch(e){
        res.status(400).send("Unauthenticated");
    }
}

module.exports = auth;