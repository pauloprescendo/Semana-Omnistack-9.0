import axios from 'axios';

const api = axios.create({
  baseURL: 'http://26.102.112.40:3333',
});

export default api;
