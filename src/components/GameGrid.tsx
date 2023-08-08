import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { data } = useGames();

  return (
    <ul>
      {data?.results.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
