const { body } = require("express-validator");
const path = require("path");


function imageValidator(){
    return [
        body("image").custom((value,{req})=>{
            if(Object.keys(req.file).length==0) throw("یک تصویر انتخاب کنید");

            const ext = path.extname(req.file.originalname);
            const exts = [".png" , ".jpg" , ".jpeg" , ".gif" , ".webp"];
            if(!exts.includes(ext)) throw("فرمت فایل درست نیست");

            const maxSize = 2 * 1024 * 1024;
            if(req.file.size>maxSize)  throw("حجم فایل نمیتواند بیشتر از 2 مگابایت باشد");

            return true;
        })
    ]
}

module.exports={
    imageValidator
}