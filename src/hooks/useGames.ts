import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Game from '../entities/Game';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const query = useGameQueryStore((s) => s.query);

  return useQuery({
    queryKey: ['games', query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: query.genre,
        },
      }),
    staleTime: ms('24h'),
  });
};

export default useGames;
