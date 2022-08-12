const multer = require("multer");
const { fileUploadPath } = require("./functions");
const path = require("path");

const storage = multer.diskStorage({
    destination : (req,file,callback)=>{
        callback(null, fileUploadPath());        
    },
    filename : (req,file,callback)=>{
        const type = path.extname(file.originalname);
        callback(null , Date.now() + type);
    }
})

const upload_multer = multer({storage})

module.exports={
    upload_multer
}