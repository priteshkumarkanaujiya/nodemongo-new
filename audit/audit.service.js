
const db = require('_helpers/db');
const Audit = db.Audit;
const User = db.User;
const mongoose = require("mongoose");
module.exports = {
    getAllAudits,
    checkRole

};


async function getAllAudits() {

    console.log("reached");
    return Audit.find({}).populate("user");


}
async function checkRole(user) {

    return User.findOne({ _id: mongoose.Types.ObjectId(user) });

}

