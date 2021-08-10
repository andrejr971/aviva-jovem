import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://avivajovemadf.com/api',
  baseURL: 'http://localhost:3000/api',
});

export { api };
