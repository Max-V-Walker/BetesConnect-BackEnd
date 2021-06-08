const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema(

    {
        username: {
            type: String,
            requried: true
        },
        name: {
            type: String,
            requried: true
        },
        password: String,
        profilePhoto: {
            type: String,
            requried: true
        },
        dob: Date,
        location: String,
        joined: String,
        connection: {
            type: String,
            requried: true
        },
        aboutMe: {
            type: String,
            requried: true
        },
        posts: [String],
        bookmarks: [String],
    }, {timestamp: true}
);
    
const User = mongoose.model('User', UserSchema);

module.exports = User;