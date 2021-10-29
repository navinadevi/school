const service = require("./teacher.service");

const getTeacher = async (req, res) => {
    try{
        var teacher = await service.getTeacher(req);
        res.status(200).send(teacher);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const getTeacherById = async (req, res) => {
    try{
        var teacher = await service.getTeacherById(req);
        res.status(200).send(teacher);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const saveTeacher = async (req, res) => {
    try{
        var teacher = await service.saveTeacher(req);
        res.status(201).send(teacher);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const updateTeacher = async (req, res) => {
    try{
        var teacher = await service.updateTeacher(req);
        res.status(201).send("Teacher updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deleteTeacher = async (req, res) => {
    try{
        var teacher = await service.deleteTeacher(req);
        res.status(201).send("Teacher deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getTeacher,
    getTeacherById,
    saveTeacher,
    updateTeacher,
    deleteTeacher
}