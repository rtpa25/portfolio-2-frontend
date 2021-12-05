/** @format */

import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    Authorization: 'Bearer ' + Cookies.get('token'),
  },
});

export const axiosAuthInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});
