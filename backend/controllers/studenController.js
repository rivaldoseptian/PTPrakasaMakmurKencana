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
  static async editStudent(req, res, next) {
    try {
      const { id } = req.params;
      const { name, dateofbirdh } = req.body;
      let currentDate = new Date();
      let validatebirdh = new Date(dateofbirdh);
      let age = currentDate.getFullYear() - validatebirdh.getFullYear();
      if (age < 6) throw { name: "Must Be 6 Years Old" };
      let student = await Student.update(
        {
          name,
          dateofbirdh,
          age,
        },
        { where: { id } }
      );
      res.status(200).json(student);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = StudentController;
