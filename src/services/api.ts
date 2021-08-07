import axios from 'axios';

const api = axios.create({
  baseURL: 'https://avivajovemadf.com/api',
});

export { api };
