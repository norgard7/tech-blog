const { User } = require('../models');

const userdata = [
  {
    username: 'firstuser',
    password: '1234456789',
    
  },
  {
    username: 'seconduser',
    password: '123456789',
    
  },
  {
    username: 'thirduser',
    password: '123456789',
    
  },
 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;