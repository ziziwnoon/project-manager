const { checkLogin } = require("../http/middleweare/autoLogin");
const {UserController} = require("../http/controllers/user.controller");
const { upload_multer } = require("../modules/multer");
const { imageValidator } = require("../http/validations/user");
const { expressValidatorMapper } = require("../http/middleweare/checkErrors");
const router = require("express").Router();

router.get("/profile" , checkLogin , UserController.getProfile);
router.post("/profile" , checkLogin , UserController.editProfile);
router.post("/profile-image" , checkLogin , upload_multer.single("image") ,imageValidator(),expressValidatorMapper,UserController.uploadProfileImage);

module.exports={
    UserRoutes : router
}