import axios from 'axios';

const axiosInstance =  axios.create({
  baseURL: 'http://10.10.0.102:4000/',
});


axiosInstance.interceptors.request.use( async (config) => {
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export default axiosInstance;