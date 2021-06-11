const mongoose = require('../db/connection');

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
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        likes: [],
        bookmarks: [{}],
        thread: [],
    }, {timestamp: true}
);
    
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;