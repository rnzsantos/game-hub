import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import Genre from '../entities/Genre';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    initialData: genres,
  });

export default useGenres;
