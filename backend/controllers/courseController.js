const { Student, Course, GetCourse } = require("../models");

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

  static async createGetCourse(req, res, next) {
    try {
      const { CourseId } = req.params;
      const { StudentId } = req.body;

      const existingGetCourse = await GetCourse.findOne({
        where: { StudentId },
      });

      if (existingGetCourse)
        throw { name: "StudentId already exists for a course" };

      const course = await Course.findByPk(CourseId);
      if (!course) throw { name: "Course Not found" };
      const student = await Student.findByPk(StudentId);
      if (!student) throw { name: "Student Not found" };
      const getcourse = await GetCourse.create({
        StudentId,
        CourseId,
      });
      res.status(201).json(getcourse);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async getcourseById(req, res, next) {
    try {
      const { CourseId } = req.params;
      const course = await GetCourse.findAll({
        where: { CourseId },
        include: [Student],
      });
      res.status(200).json(course);
    } catch (error) {
      next(error);
    }
  }

  static async deleteStudent(req, res, next) {
    try {
      const { StudentId } = req.params;
      const student = await GetCourse.destroy({ where: { StudentId } });
      res.status(200).json({ message: "Succes Delete Student" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CourseController;
