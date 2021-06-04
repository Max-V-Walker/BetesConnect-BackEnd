const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");

// Create: Create new User
router.post("/", (req, res, next) => {
  User.create(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

// Index: Get all Users
router.get("/", (req, res, next) => {
  User.find({})
    .then((result) => res.json(result))
    .catch(next);
});

// Show: Get a User by username
router.get("/:username", (req, res, next) => {
  User.findOne({ username: req.params.username })
    // .populate("posts")
    // .exec((error, posts) => {
    //   if (error) return console.log("Post population error");
    // })
    .then((result) => res.json(result))
    .catch(next);
});

// Update: Edit User
router.put("/:id", (req, res, next) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((result) => res.json(result))
    .catch(next);
});

// Delete: Delete User
router.delete("/:username", (req, res, next) => {
  User.findOneAndDelete({ username: req.params.username })
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;