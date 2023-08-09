const router = require("express").Router();
const CourseController = require("../controllers/courseController");

router.post("/", CourseController.createCourse);

module.exports = router;
