const express = require("express");
const app = express();
const port = 8000;

// config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "server/config/.env"
    })
}

module.exports = app;