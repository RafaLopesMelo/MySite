import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/main';
import Contact from './pages/Contact/contact';
import Blog from './pages/Blog/blog';
import Post from './pages/Post/post';
import Admin from './pages/Admin/admin';
import Add from './pages/Add/add';
import Login from './pages/Login/login';
import RegisterAdmin from './pages/RegisterAdmin/RegisterAdmin'

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Main } />
                <Route path="/contato" component = { Contact } />
                <Route path="/posts" exact component = { Blog } />
                <Route path= {["/posts/:id", "/admin/posts/:id"]} exact component = { Post } />
                <Route path="/admin/posts" exact component = { Admin } />
                <Route path="/admin/add" exact component = { Add }/>
                <Route path="/login" component = { Login } />
                <Route path="/admin/register" component = { RegisterAdmin } />
            </Switch>
        </BrowserRouter>

    )
}