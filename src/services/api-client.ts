import axios, { AxiosRequestConfig } from 'axios';

export interface GetResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'eee8227a37b04f40bd1d0ce3f59c6c81',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<GetResponse<T>>(this.endpoint, config)
      .then((res) => res.data);

  get = () => axiosInstance.get<T>(this.endpoint).then((res) => res.data);
}

export default APIClient;
