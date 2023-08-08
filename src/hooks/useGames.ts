import { useQuery } from '@tanstack/react-query';
import HTTPService from '../services/http-service';
import Game from '../entities/Game';

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const gameService = new HTTPService<FetchGamesResponse>('/games');

const useGames = () =>
  useQuery({
    queryKey: ['games'],
    queryFn: gameService.getAll,
  });

export default useGames;
