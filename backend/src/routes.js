const express = require('express');
const PostsController = require('./controllers/PostsController');
const AdminController = require('./controllers/AdminController');
const PortfolioController = require('./controllers/PortfolioController');

const routes = express.Router();

routes.get('/posts', PostsController.index);
routes.get('/admin/posts', PostsController.index);
routes.get('/posts/:id', PostsController.profile);
routes.get('/admin/posts/:id', PostsController.profile);

routes.get('/portfolio', PortfolioController.index);
routes.get('/portfolio/:id', PortfolioController.profile);

routes.post('/login', AdminController.login);
routes.get('/admin/index', AdminController.index)
routes.post('/admin/register', AdminController.register)
routes.delete('/admin/index/:user', AdminController.delete)

routes.post('/admin/posts', PostsController.create);
routes.delete('/admin/posts/:id', PostsController.delete);

routes.get('/admin/portfolio', PortfolioController.index);
routes.post('/admin/portfolio', PortfolioController.create);
routes.delete('/admin/portfolio/:id', PortfolioController.delete);


module.exports = routes;