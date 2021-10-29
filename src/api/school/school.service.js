const School = require("../../models/school");

const getSchool = (req) => {
    try {
        console.log("............",req.query);
       return School.find(req.query).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip));
    } catch(e) {
        return e;
    }
}

const saveSchool = (req) => {
    try {
        var school = new School(req.body)
        return school.save()
    } catch(e) {
        return e;
    }
}

const updateSchool = (req) => {
    try {
        return School.findByIdAndUpdate(req.params.id, req.body);
    } catch (e) {
        return e;
    }
}

const deleteSchool = (req) => {
    try {
        return School.findByIdAndDelete(req.params.id);
    } catch (e) {
        return e;
    }
}

module.exports = {
    getSchool,
    saveSchool,
    updateSchool,
    deleteSchool
}