import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/main';
import Contact from './pages/Contact/contact';
import Blog from './pages/Blog/blog';
import Post from './pages/Post/post';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Main } />
                <Route path="/contato" component = { Contact } />
                <Route path="/posts" exact component = { Blog } />
                <Route path="/posts/:id" component = { Post } />
            </Switch>
        </BrowserRouter>

    )
}