const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true,
        lowerCase : true
    },
    password : {
        type : String,
        trim : true,
        required : true,
        minlength : 8
       
    },
    role : {
        type : String,
        enum : ["SUPER_ADMIN","SCHOOL_ADMIN"],
        required: true,
        trim : true
    }

});

AdminSchema.pre('save', async function () {
    var admin = this;
    console.log("............",admin);
    if (admin.password) {
        admin.password = await bcrypt.hash(admin.password, 8);
    }
});

AdminSchema.statics.findByCredential = async function(email, password){
    var admin = await Admin.findOne({email:email});
    if(!admin){
        throw new Error("Unable to Login");
    }
    var check = await bcrypt.compare(password, admin.password);

    if(!check){
        throw new Error("Unable to Login");
    }
    return admin;
}

AdminSchema.methods.generateAuthToken = function(){
    var admin = this;
    var token = jwt.sign({_id: admin._id},'thisisschooladmin');
    return token;
}

const Admin = mongoose.model("Admin",AdminSchema);

module.exports = Admin;