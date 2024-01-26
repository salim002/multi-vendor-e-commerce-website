const express = require("express");
const app = express();
const port = 8000;

const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/", express.static("uploads"));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "server/config/.env"
    });
}

// Import routes
const user = require("./controller/user");
const shop = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);

// Error Handling
app.use(ErrorHandler);

module.exports = app;
