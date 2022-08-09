const { registerValidator , loginValidator } = require("../http/validations/auth");
const {AuthController} = require("../http/controllers/auth.controller");
const {expressValidatorMapper} = require("../http/middleweare/checkErrors")
const router = require("express").Router();

router.post("/register" , registerValidator() , expressValidatorMapper, AuthController.register)
router.post("/login" , loginValidator() , expressValidatorMapper, AuthController.login)
module.exports={
    AuthRoutes : router
}