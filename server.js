const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./database/db");
const dotenv = require("dotenv");

dotenv.config();
//intialize app
const app = express();

//middlewares
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//connecting database
connectDatabase();
module.exports = app;
