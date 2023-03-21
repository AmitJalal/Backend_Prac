const {
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require('../controllers/User.Controller');

const UserRouter = require('express').Router();

UserRouter.get('/user', getUser);

UserRouter.post('/user', createNewUser);

UserRouter.patch('/user/:id', updateUser);

UserRouter.delete('/user/:id', deleteUser);

module.exports = UserRouter;
