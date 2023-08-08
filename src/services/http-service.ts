import apiClient from './api-client';

class HTTPService<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => apiClient.get<T>(this.endpoint).then((res) => res.data);
}

export default HTTPService;
