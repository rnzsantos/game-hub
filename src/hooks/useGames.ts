import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Game from '../entities/Game';
import APIClient, { GetResponse } from '../services/api-client';
import useGameQueryStore from '../store';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useQuery<GetResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
        },
      }),
    staleTime: ms('24h'),
  });
};

export default useGames;
