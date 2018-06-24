import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Welcome from './components/welcome';

ReactDOM.render(
    <Provider>
      <BrowserRouter>
        <App>
          <Route path="/" exact component={Welcome} />
        </App>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  );