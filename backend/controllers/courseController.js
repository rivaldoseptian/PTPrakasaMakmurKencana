const { Course, GetCourse } = require("../models");
const course = require("../models/course");

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
      const course = await Course.findAll();
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async editCourse(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const course = await Course.update({ name }, { where: { id } });
      res.status(200).json({ message: "Succes Edit Course" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CourseController;
