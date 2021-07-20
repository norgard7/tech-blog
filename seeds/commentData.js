const { Comment } = require('../models');

const commentdata = [
  {
    comment_content: 'No way.  If you are using pineapple then it is called flatbread',
    date_created: '06/25/2020',
    user_id: 1,
    post_id: 1, 
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;