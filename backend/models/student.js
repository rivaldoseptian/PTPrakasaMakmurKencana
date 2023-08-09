"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.hasMany(models.GetCourse, {
        foreignKey: "StudentId",
      });
    }
  }
  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name cannot Null",
          },
          notEmpty: {
            msg: "Name cannot Empty",
          },
        },
      },
      age: DataTypes.INTEGER,
      dateofbirdh: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  Student.beforeCreate((student, Option) => {
    const currentDate = new Date();
    student.age = currentDate.getFullYear() - student.dateofbirdh.getFullYear();
    if (student.age < 6) throw { name: "Must Be 6 Years Old" };
  });

  return Student;
};
