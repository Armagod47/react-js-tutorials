import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <Fragment>
    <Provider store={store}>
       <App />
    </Provider>
   </Fragment>
  
);