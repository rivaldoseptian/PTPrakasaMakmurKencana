const router = require("express").Router();
const CourseController = require("../controllers/courseController");

router.get("/:CourseId", CourseController.getcourseById);
router.post("/:CourseId", CourseController.createGetCourse);
router.delete("/:StudentId", CourseController.deleteStudent);

module.exports = router;
