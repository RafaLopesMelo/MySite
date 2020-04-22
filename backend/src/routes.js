const express = require('express');
const PostsController = require('./controllers/PostsController');
const AdminController = require('./controllers/AdminController');
const PortfolioController = require('./controllers/PortfolioController');

const VerifyJWT = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/posts', PostsController.index);
routes.get('/posts/:id', PostsController.profile);

routes.get('/portfolio', PortfolioController.index);
routes.get('/portfolio/:id', PortfolioController.profile);

routes.post('/login', AdminController.login);
routes.get('/admin/index', VerifyJWT, AdminController.index)
routes.post('/admin/register', VerifyJWT, AdminController.register)
routes.delete('/admin/index/:user', VerifyJWT, AdminController.delete)

routes.get('/admin/posts', VerifyJWT, PostsController.index);
routes.post('/admin/posts', VerifyJWT, PostsController.create);
routes.delete('/admin/posts/:id', VerifyJWT, PostsController.delete);

routes.get('/admin/portfolio', PortfolioController.index);
routes.post('/admin/portfolio', VerifyJWT, PortfolioController.create);
routes.delete('/admin/portfolio/:id', VerifyJWT, PortfolioController.delete);


module.exports = routes;