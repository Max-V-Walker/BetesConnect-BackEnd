const Post = require('../models/PostModel.js');
const User = require('../models/UserModel.js');
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