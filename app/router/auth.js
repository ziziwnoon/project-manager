const { registerValidator } = require("../http/validations/auth");
const {AuthController} = require("../http/controllers/auth.controller");
const {expressValidatorMapper} = require("../http/middleweare/checkErrors")
const router = require("express").Router();

router.post("/register" , registerValidator() , expressValidatorMapper, AuthController.register)

module.exports={
    AuthRoutes : router
}