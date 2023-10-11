const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:String,
    role: String,
});

module.exports = mongoose.model('UserProfile', usersSchema);
