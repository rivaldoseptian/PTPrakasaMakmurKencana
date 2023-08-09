"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GetCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      GetCourse.belongsTo(models.Student, {
        foreignKey: "StudentId",
      });
      GetCourse.belongsTo(models.Student, {
        foreignKey: "CourseId",
      });
    }
  }
  GetCourse.init(
    {
      StudentId: DataTypes.INTEGER,
      CourseId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "GetCourse",
    }
  );
  return GetCourse;
};
