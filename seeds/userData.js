const { User } = require('../models');

const userdata = [
  {
    username: 'firstuser',
    password: '1234',
    
  },
  {
    username: 'seconduser',
    password: '1234',
    
  },
  {
    username: 'thirduser',
    password: '1234',
    
  },
 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;