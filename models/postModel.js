const mongoose = require('../db/connection');

const PostSchema = new mongoose.Schema(
    {
        headline: {
            type: String,
            requried: true
        },
        content: {
            type: String,
            requried: true
        },
        author: {
            type: String,
            required: true,
          },
        likes: [String],
        bookmarks: [String],
        thread: [{}]
    }, {timestamp: true}
);
    
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;