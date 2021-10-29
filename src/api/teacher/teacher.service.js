const Teacher = require("../../models/teacher");

const getTeacher = (req) => {
    try {
       return Teacher.find(req.query);
    } catch(e) {
        return e;
    }
}

const saveTeacher = (req) => {
    try {
        var teacher = new Teacher(req.body)
        return teacher.save()
    } catch(e) {
        return e;
    }
}

const updateTeacher = (req) => {
    try {
        return Teacher.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteTeacher = (req) => {
    try {
        return Teacher.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getTeacher,
    saveTeacher,
    updateTeacher,
    deleteTeacher
}