const { Course } = require("../models");

class CourseController {
  static async createCourse(req, res, next) {
    try {
      const { StudentId } = req.params;
      const { name } = req.body;
      const course = await Course.create({ name, StudentId });
      res.status(201).json(course);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CourseController;
