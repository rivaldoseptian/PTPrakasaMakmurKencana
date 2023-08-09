const { Course } = require("../models");

class CourseController {
  static async createCourse(req, res, next) {
    try {
      const { name } = req.body;
      const course = await Course.create({ name });
      res.status(201).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async getCourse(req, res, next) {
    try {
      const course = await Course;
    } catch (error) {}
  }
}

module.exports = CourseController;
