import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import allReducers from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


// Store -> Globalized State
const myStore = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Action Increment


// Reducer -> describes how your action transform one state into other states



// Dispatch
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={myStore}>
        <App />
    </Provider>

);
