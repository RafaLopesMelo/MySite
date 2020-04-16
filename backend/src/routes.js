const express = require('express');
const PostsController = require('./controllers/PostsController');
const AdminController = require('./controllers/AdminController');
const PortfolioController = require('./controllers/PortfolioController');

const routes = express.Router();

routes.get('/', (req, res) => {res.send('Main Page')});

routes.get('/posts', PostsController.index);
routes.get('/posts/:id', PostsController.profile);
routes.get('/posts/:category', PostsController.category)

routes.post('/admin/login', AdminController.login);
routes.get('/admin/index', AdminController.index)
routes.post('/register', AdminController.register)
routes.delete('/admin/index/:user', AdminController.delete)

routes.get('/admin/posts', PostsController.index);
routes.post('/admin/posts', PostsController.create);
routes.delete('/admin/posts/:id', PostsController.delete);


routes.get('/portfolio', PortfolioController.index);
routes.post('/portfolio', PortfolioController.create);
routes.delete('/portfolio/:id', PortfolioController.delete);
routes.get('/portfolio/:id', PortfolioController.profile);

module.exports = routes;