import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from './store/auth-context';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));


// MANAGING CONTEXT IN ONE PLACE IN AUTHCONTEXT
ReactDOM.render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>, document.getElementById('root'));
