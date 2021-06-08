// const mongoose = require('../db/connection');
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
    {
        headline: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        likes: [String],
        bookmarks: [String],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        thread: [{}]
    }, {timestamp: true}
);
    
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;