const fileupload = require("express-fileupload");
const path = require("path");
const { fileUploadPath } = require("./functions");

const uploadFile = async(req,res,next)=>{
    try {
        fileupload();
        if(req.file || Object.keys(req.files).length==0) throw{status:401 , message:"یک تصویر انتخاب کنید"};
        let image = req.files.image;
        const image_path = path.join(fileUploadPath() , (Date.now()+path.extname(image.name)));
        req.body.image = image_path;
        let uploadPath = path.join(__dirname,"..","..",image_path);
        image.mv(uploadPath,(err)=>{
            if(err) throw{status:500 , message:"آپلود عکس انجام نشد"}
            next();
        })
        
    } catch (error) {
        next(error);
    }
}

module.exports={
    uploadFile
}