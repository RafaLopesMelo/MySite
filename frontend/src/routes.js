import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/main';
import Contact from './pages/Contact/contact';
import Blog from './pages/Blog/blog'

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Main } />
                <Route path="/contato" component = { Contact } />
                <Route path="/blog" component = { Blog } />
            </Switch>
        </BrowserRouter>

    )
}