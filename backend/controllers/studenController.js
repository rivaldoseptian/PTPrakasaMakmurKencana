const { Student } = require("../models");

class StudentController {
  static async getStudent(req, res, next) {
    try {
      console.log("ok");
    } catch (error) {}
  }
  static async createStudent(req, res, next) {
    try {
      const { name } = req.body;
      const dateofbirdh = req.body.dateofbirdh;

      let student = await Student.create({
        name,
        dateofbirdh,
      });
      res.status(201).json(student);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = StudentController;
