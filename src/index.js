import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/index.scss";

import { Provider } from 'react-redux';
import store from './store';

import { SampleRedux } from "./components";

ReactDOM.render(
  <Provider store={store}>
    <SampleRedux />
  </Provider>,
  document.getElementById('root')
);
