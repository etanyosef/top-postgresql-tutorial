const { Router } = require('express');
const usersRouter = Router();
const usersController = require('../controllers/usersController');

usersRouter.get('/', usersController.getUsernames);
usersRouter.get('/new', usersController.createUsernameGet);
usersRouter.post('/new', usersController.createUsernamePost);
usersRouter.post('/delete/:id', usersController.deleteUsernamePost);
usersRouter.get('/search', usersController.searchUsernamesGet);

module.exports = usersRouter;