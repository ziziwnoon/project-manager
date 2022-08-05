const { AuthRoutes } = require("./auth");
const { ProjectRoutes } = require("./project");
const { TeamRoutes } = require("./team");
const { UserRoutes } = require("./user");

const router = require("express").Router();

router.use("/auth" , AuthRoutes);
router.use("/user" , UserRoutes);
router.use("/project" , ProjectRoutes);
router.use("/team" , TeamRoutes);

module.exports={
    AllRoutes : router
}