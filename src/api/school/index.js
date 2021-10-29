const express = require("express");
const router = express.Router();
const controller = require("./school.controller");
const auth = require("./../../middleware/auth");
const role = require("./../../middleware/role")

router.get('/', auth, role("SUPER_ADMIN"), controller.getSchool);
router.post('/', auth, role, controller.saveSchool);
router.put('/:id', auth, role, controller.updateSchool);
router.delete('/:id', auth, role, controller.deleteSchool);

module.exports = router;