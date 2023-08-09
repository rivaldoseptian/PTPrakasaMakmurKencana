const router = require("express").Router();
const StudentController = require("../controllers/studenController");

router.get("/", StudentController.getStudent);
router.post("/", StudentController.createStudent);
router.put("/:id", StudentController.editStudent);

module.exports = router;
