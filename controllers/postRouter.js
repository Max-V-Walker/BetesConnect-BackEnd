const express = require("express");
const router = express.Router();
const Post = require("../models/PostModel");

// Create: Create new Post
router.post("/", (req, res, next) => {
  Post.create(req.body)
  .then(createResponse => Post.find({}))
  .then(posts => res.json(posts))
  .catch(next);
});

// Index: Get all Posts
router.get("/", (req, res, next) => {
  Post.find({})
    .then((result) => res.json(result))
    .catch(next);
});

// Show: Get a Post by id
router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

// Update: Edit Post
router.put("/:id", (req, res, next) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body)
  .then(editResponse => Post.find({}))
  .then(posts => res.json(posts))
  .catch(next);
});

// Delete: Delete Post
router.delete("/:id", (req, res, next) => {
  Post.findOneAndDelete({ _id: req.params.id })
  .then(deleteResponse => Post.find({}))
  .then(posts => res.json(posts))
  .catch(next);
});

module.exports = router;