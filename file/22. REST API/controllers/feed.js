const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then(post => {
      res.status(200).json({ message: "posts found successfully!", post });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title,
    content
  });
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: "Post created successfully!",
        post: result
      });
    })
    .catch(err => console.log(err));
};
