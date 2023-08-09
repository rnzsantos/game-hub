import { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

class HTTPService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>
    apiClient.get<T>(this.endpoint, config).then((res) => res.data);
}

export default HTTPService;
