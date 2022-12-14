import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reducer, { initialState } from './reducer';
import { StateProvidere } from './StateProvidere';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StateProvidere initialState={initialState} reducer={reducer}> 
    <App />
    </StateProvidere>
);


