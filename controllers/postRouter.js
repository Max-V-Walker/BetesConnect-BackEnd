const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");
const User = require("../models/UserModel");

// Create: Create new Post
router.post("/", async (req, res, next) => {
const user = await User.findById(req.body.author)
  req.body.author = user

  Post.create(req.body)
  .then(createResponse => Post.find({}))
  .then(posts => res.json(posts))
  .catch(next);
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
router.delete("/:id", (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id })
  .then(deleteResponse => Post.find({}))
  .then(posts => res.json(posts))
});

module.exports = router;