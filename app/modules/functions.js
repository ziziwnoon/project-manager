const bcrypt = require("bcrypt");

function hashString(data){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(data , salt);
}

module.exports = {
    hashString
}