const express = require("express");
const router = express.Router();
const controller = require("./teacher.controller");
const auth = require("./../../middleware/auth");
const role = require("./../../middleware/role")

router.get('/', auth, role("SCHOOL_ADMIN"), controller.getTeacher);
router.post('/', auth, role, controller.saveTeacher);
router.put('/:id', auth, role,controller.updateTeacher);
router.delete('/:id', auth, role,controller.deleteTeacher);

module.exports = router;