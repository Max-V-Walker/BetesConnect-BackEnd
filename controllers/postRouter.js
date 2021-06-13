const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

// Create: Create new Post
router.post("/", async (req, res) => {
const user = await User.findById(req.body.author)
  req.body.author = user

  const newPost = await Post.create(req.body)
  res.json(newPost)
});

// Index: Get all Posts
router.get("/", async (req, res) => {
  results = await Post.find({}).populate('author')
    res.json(results)
});

// Show: Get a Post by id
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((result) => res.json(result))
});

// Update: Edit Post
router.put("/:id", (req, res) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(posts => res.json(posts))
});

// Delete: Delete Post
router.delete("/:id", async (req, res) => {
  const deletePost = await Post.findOneAndDelete({ _id: req.params.id })
  res.json(deletePost)
});

module.exports = router;