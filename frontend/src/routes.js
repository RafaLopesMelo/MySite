import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main/index';
import Contact from './pages/Contact/index';

export default function Routes() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Main } />
                <Route path="/contato" component = { Contact } />
            </Switch>
        </BrowserRouter>

    )
}