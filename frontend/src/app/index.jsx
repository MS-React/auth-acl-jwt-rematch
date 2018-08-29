import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './assets/styles/global.scss';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app'),
);
