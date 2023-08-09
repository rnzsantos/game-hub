import { SimpleGrid, Spinner } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      spacing={{ base: 5, lg: 7 }}
    >
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
