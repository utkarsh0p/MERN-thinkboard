import axios from 'axios';

const BASE_URL =
  import.meta.env.MODE === 'development' ? 'http://15.206.149.219:5000' : '/api';
export const api = axios.create({
  baseURL: BASE_URL,
});
