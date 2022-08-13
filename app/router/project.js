const { ProjectController } = require("../http/controllers/project.controller");
const { checkLogin } = require("../http/middleweare/autoLogin");
const { expressValidatorMapper } = require("../http/middleweare/checkErrors");
const { projectValidator } = require("../http/validations/project");
const fileupload = require("express-fileupload");
const { uploadFile } = require("../modules/express-fileupload");

const router = require("express").Router();
router.post("/create",fileupload(),checkLogin,uploadFile,projectValidator(),expressValidatorMapper,ProjectController.createProject);

module.exports={
    ProjectRoutes : router
}