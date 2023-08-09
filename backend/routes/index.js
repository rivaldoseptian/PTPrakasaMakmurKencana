const router = require("express").Router();
const student = require("./student");
const course = require("./course");
const getCourse = require("./getCourse");

router.use("/student", student);
router.use("/course", course);
router.use("/getcourse", getCourse);
module.exports = router;
