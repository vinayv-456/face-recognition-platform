import axios from 'axios';

const axiosInstance =  axios.create({
  baseURL: 'https://secret-tor-46842.herokuapp.com/',
});


axiosInstance.interceptors.request.use( async (config) => {
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axiosInstance;