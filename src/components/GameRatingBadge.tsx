import { Badge } from '@chakra-ui/react';

interface Props {
  gameRating: number;
}

const GameRatingBadge = ({ gameRating }: Props) => {
  const colorScheme =
    gameRating >= 75 ? 'green' : gameRating >= 50 ? 'yellow' : 'red';

  return (
    <Badge fontSize="md" paddingX={2} colorScheme={colorScheme}>
      {gameRating ? gameRating : 'N/A'}
    </Badge>
  );
};

export default GameRatingBadge;
