import { useQuery } from '@tanstack/react-query';
import Genre from '../entities/Genre';
import HTTPService from '../services/http-service';

interface AxiosResponse {
  count: number;
  results: Genre[];
}

const genresService = new HTTPService<AxiosResponse>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
  });

export default useGenres;
