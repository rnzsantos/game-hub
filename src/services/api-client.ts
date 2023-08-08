import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eee8227a37b04f40bd1d0ce3f59c6c81',
  },
});

export default apiClient;
