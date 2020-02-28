import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost/~balzer/headless'
});

export default api;