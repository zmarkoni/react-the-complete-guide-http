import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// Setting global configuration
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; set inside axios.js instance
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptors are global now for whole APP, https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8125790#overview
// Interceptors are used to globally set configurations for fetching URL and error handling
axios.interceptors.request.use(request => {
    console.log('request: ', request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error); // for errors when SENDING requests
});

axios.interceptors.response.use(response => {
    console.log('response: ', response);
    // Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error); // for errors when Fetching requests
});

// Removing Interceptors
//axios.interceptors.request.eject(interceptorRequest);
//axios.interceptors.request.eject(interceptorResponse);



ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
