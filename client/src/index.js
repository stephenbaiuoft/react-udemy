// primary location to start off react/root component to the react dom
import React from 'react';
import ReactDOM from 'react-dom'; //reactDOM to perform rendering
import {Provider} from 'react-redux'; // the glue that tights redux to react and vice versa
import {createStore, applyMiddleware} from 'redux';

import App from  './Components/App';
import reducers from './reducers';

const store = createStore(reducers, // place holder reducer
                          {}, // initial store state (could be used for some server start up)
                          applyMiddleware() // might be used later
                          );
ReactDOM.render(
    <Provider store ={store}><App /></Provider>,  // provider tag binds store and updates the App element
    document.querySelector('#root') // select the element with ID root
);