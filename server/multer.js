const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");
    }
});

// Setting the file size limit to 50MB
// const fileLimit = 50 * 1024 * 1024;

// exports.upload = multer({ 
//     storage: storage,
//     limits: { fileSize: fileLimit }
// });

exports.upload = multer({ storage: storage });
