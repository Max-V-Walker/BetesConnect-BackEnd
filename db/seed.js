const Post = require('../models/postModel.js');
const User = require('../models/userModel.js');
const userData = require('./userSeed.json');
const postData = require('./postSeed.json');

Post.deleteMany({})
  .then(() => {
    return Post.insertMany(postData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

  User.deleteMany({})
  .then(() => {
    return User.insertMany(userData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });