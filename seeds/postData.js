const { Post } = require('../models');

const postdata = [
  {
    title: 'Pineapple is great on pizza',
    content: "I don't know why everyone has to be a hater.  I think pineapple on pizza is wonderful.  Sweet and salty belong together.",
    user_id: 3  
  },
  {
    title: 'Never buy a TV again',
    content: "Purchasing a TV is silly.  If you want to watch something there are two options.  Frist you can use your computer which allows for a more individualize viewing experience.  If you want to watch something with a group purchase a projector.  Projectors are often cheaper than a TV and you get more of the going to the movies vibe.",
    user_id: 2  
  },

];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;