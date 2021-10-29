const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    dept : {
        type : String,
        required : true,
        trim : true,
    }
});
const Teacher = mongoose.model("Teacher",TeacherSchema);

module.exports = Teacher;