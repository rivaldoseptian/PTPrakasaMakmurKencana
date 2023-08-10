module.exports = (error, request, response, next) => {
  let status = 500;
  let message = "Internal Server Error";

  switch (error.name) {
    case "Not Found":
      status = 404;
      message = "Data Not Found";
      break;
    case "Must Be 6 Years Old":
      status = 400;
      message = "Must Be 6 Years Old";
      break;
    case "SequelizeValidationError":
    case "SequelizeUniqueValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "Student Not found":
      status = 404;
      message = "Student Not found";
      break;
    case "Course Not found":
      status = 404;
      message = "Course Not found";
      break;
    case "StudentId already exists for a course":
      status = 404;
      message = "Student already exists for a course";
      break;
    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  response.status(status).json({ message: message });
};
