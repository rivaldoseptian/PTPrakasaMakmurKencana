const router = require("express").Router();
const StudentController = require("../controllers/studenController");

router.get("/", StudentController.getStudent);

module.exports = router;
