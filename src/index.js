import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//import { fetchInitialPosts } from './Components/Redux/PostsSlice';
import store from './Components/Redux/Store';

//STORE --> GLOBALIZED STATE


//ACTION --> describes what happens


//REDUCER --> checks dispatched action and modifies the store


//DISPATCH --> executes action 
//store.dispatch(fetchInitialPosts());


ReactDOM.render(
    <Provider store={ store } >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
