import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Forum from './view/forum/forum';
import Message from './view/message/message';
import User from './view/user/user';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/1" component={Forum} />
            <Route exact path="/message" component={Message} />
            <Route exact path="/user" component={User} />
        </Switch>
    </BrowserRouter>
);

export default Router;