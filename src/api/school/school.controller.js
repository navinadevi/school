const service = require("./school.service");

const getSchool = async (req, res) => {
    try{
        var school = await service.getSchool(req);
        res.status(200).send(school);
    }catch(error){
        res.status(500).send("Internal server error");
    } 
}

const getSchoolById = async (req, res) => {
    try{
        var school = await service.getSchoolById(req);
        res.status(200).send(school);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const saveSchool = async (req, res) => {
    try{
        var school = await service.saveSchool(req);
        res.status(201).send(school);
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const updateSchool = async (req, res) => {
    try{
        var school = await service.updateSchool(req);
        res.status(201).send("School updated successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

const deleteSchool = async (req, res) => {
    try{
        var school = await service.deleteSchool(req);
        res.status(201).send("School deleted successfully");
    }catch(error){
        res.status(500).send("Internal server error");
    }
}

module.exports = {
    getSchool,
    getSchoolById,
    saveSchool,
    updateSchool,
    deleteSchool
}