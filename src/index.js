import React from 'react';
import ReactDOM from 'react-dom';
import App from './RootComponent/app';
import {Provider} from "react-redux";
import {createStore} from "redux";
import allReducers from "./reducers/combineReducer";
 
const reduxStore =  createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
<Provider store={reduxStore}>
<App/>
</Provider>,
     document.getElementById('root'));
