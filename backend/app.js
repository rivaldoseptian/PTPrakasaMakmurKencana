if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
//   const errorHandler = require("./middleware/errorHandler");
const app = express();
let cors = require("cors");
const router = require("./routes");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
