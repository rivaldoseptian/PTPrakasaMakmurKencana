const router = require("express").Router();
const CourseController = require("../controllers/courseController");

router.get("/", CourseController.getCourse);
router.post("/", CourseController.createCourse);
router.get("/:id", CourseController.courseById);
router.put("/:id", CourseController.editCourse);

module.exports = router;
