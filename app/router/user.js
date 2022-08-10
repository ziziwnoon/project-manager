const { checkLogin } = require("../http/middleweare/autoLogin");
const {UserController} = require("../http/controllers/user.controller");
const router = require("express").Router();

router.get("/profile" , checkLogin , UserController.getProfile);
router.post("/profile" , checkLogin , UserController.editProfile);

module.exports={
    UserRoutes : router
}