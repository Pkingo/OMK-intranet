import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './views/app';
import Welcome from './views/welcome';
import Profile from './views/profile';
import Signup from './views/auth/signup';
import Signout from './views/auth/signout';
import Signin from './views/auth/signin';

const store = createStore(reducers, { auth: { authenticated: localStorage.getItem('token') } }, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);