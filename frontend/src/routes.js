import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Admin from './pages/Admin';
import AddPost from './pages/Add';
import Login from './pages/Login';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Main } />
                <Route path="/contato" component = { Contact } />
                <Route path="/posts" exact component = { Blog } />
                <Route path= {["/posts/:id", "/admin/posts/:id"]} exact component = { Post } />
                <Route path="/admin/posts" exact component = { Admin } />
                <Route path="/admin/add" exact component = { AddPost }/>
                <Route path="/login" component = { Login } />
            </Switch>
        </BrowserRouter>

    )
}