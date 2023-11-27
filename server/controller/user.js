const express = require("express");
const path = require("path");
const router = express.Router();
const User = require("../model/user");
const {upload} = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");


// create user
router.post("/create-user", upload.single("file"), async (req, res, next) => {
    // console.log(req.body);
    // console.log(req.file);
    try{
        const { name, email, password, avatar } = req.body;
        const userEmail = await User.findOne({ email });
        if(userEmail){
            return next(new ErrorHandler("User already exists", 400));
        }
        const filename = req.file.filename;
        const fileUrl = path.join(filename);
        // console.log("filename: ", filename);
        // console.log("fileUrl: ", fileUrl);
        const user = {
            name: name,
            email: email,
            password: password,
            avatar: fileUrl
        };
        // console.log(user);
        const newUser = await User.create(user);
        res.status(201).json({
            success: true,
            newUser,
        });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
});

module.exports = router;