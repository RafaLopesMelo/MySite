import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/index';
import Contact from './pages/Contact/index';
import Blog from './pages/Blog/index'

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