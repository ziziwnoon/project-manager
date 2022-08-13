const { body } = require("express-validator");

function projectValidator(){
    return [
        body("title").notEmpty().withMessage("عنوان پروژه نمیتواند خالی باشد"),
        body("text").notEmpty().isLength({min:20}).withMessage("توضیحات پروژه نمیتواند خالی و کمتر از 20 کارکتر باشد"),
        body("tags").isArray({min:0,max:10}).withMessage("سقف مجاز هشتگ ها 10 است")
    ]
}

module.exports={
    projectValidator
}