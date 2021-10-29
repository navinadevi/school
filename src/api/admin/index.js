const express = require("express");
const router = express.Router();
const controller = require("./admin.controller");
const auth = require("./../../middleware/auth");

router.get('/', auth, controller.getAdmin);
router.post('/login', controller.loginAdmin);
router.post('/', controller.saveAdmin);
router.put('/:id', auth, controller.updateAdmin);
router.delete('/:id', auth, controller.deleteAdmin);

module.exports = router;