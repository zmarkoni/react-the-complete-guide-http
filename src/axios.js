import axios from 'axios';

// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8125794#overview
// this instance will override global configuration from Index.js wherever we use it.
// For example in Blog.js
const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
});

axiosInstance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from Axios Instance';

//instance.interceptors.request...

export default axiosInstance;