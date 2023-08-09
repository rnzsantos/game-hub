import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import Game from '../entities/Game';
import HTTPService from '../services/http-service';
import useGameQueryStore from '../store';

interface AxiosResponse {
  count: number;
  results: Game[];
}

const gameService = new HTTPService<AxiosResponse>('/games');

const useGames = () => {
  const query = useGameQueryStore((s) => s.query);

  return useQuery({
    queryKey: ['games', query],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: query.genre,
        },
      }),
    staleTime: ms('24h'),
  });
};

export default useGames;
