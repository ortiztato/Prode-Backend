const dotenv = require("dotenv");
const result = dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");

const router = require("./network/routes");

db(process.env.DATABASE_URL);

// db(
//   "mongodb+srv://ortiztato:antorchaz@clusterprode.lzicw5t.mongodb.net/?retryWrites=true&w=majority"
// );

var app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(8080);
// app.listen(3000); // para correr en local
console.log("La aplicación está escuchando en http://localhost:3000");
