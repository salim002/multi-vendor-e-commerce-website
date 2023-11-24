const express = require("express");
const app = express();
const port = 8000;

const ErrorHandler = require("./utils/ErrorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(fileUpload({useTempFiles: true}));

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "server/config/.env"
    })
}

// Error Handling
app.use(ErrorHandler);

module.exports = app;