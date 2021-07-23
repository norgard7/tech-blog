const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const dashboardData = await Post.findAll({
      where: {user_id: req.session.user_id},
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = dashboardData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posting = postData.get({ plain: true });

    res.render('update-post', {
      ...posting,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new', withAuth, (req, res)=> {
  res.render('new-post')
});

  module.exports = router;