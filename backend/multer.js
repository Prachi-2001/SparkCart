const multer = require("multer")

// this function is for storing uploded files in a specified directory here uploads/ with unique file name cb refer to the call back
const storage = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null,"uploads/")
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now() + "-" + Math.round.apply(Math.random() * 1e9)
        const filename = file.originalname.split(".")[0];
        cb(null, filename + "-" + uniqueSuffix + ".png");

    },
});

// upload is the named middleware which is configured storage 
exports.upload = multer({storage: storage})