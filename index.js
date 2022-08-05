const Application = require("./app/server");
const DB_URL = "mongodb://localhost:27017/ProjectManagerDB";

new Application(4000,DB_URL);