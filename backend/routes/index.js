const router = require("express").Router();
const student = require("./student");
const course = require("./course");

router.use("/student", student);
router.use("/course", course);

module.exports = router;
