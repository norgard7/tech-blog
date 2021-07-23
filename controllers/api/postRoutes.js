const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {
    try {
      const post = await Post.update(
        {
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/comment', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create(
        {
          comment_content: req.body.comment,
          user_id: req.session.user_id,
          post_id: req.body.post_id,
        },
      );
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
  });


  router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create(
        {
          title: req.body.title,
          content: req.body.newPost,
          user_id: req.session.user_id,
        },
      );
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;