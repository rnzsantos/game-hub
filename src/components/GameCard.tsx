import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import Game from '../entities/Game';
import cropImage from '../services/image-url';
import GamePlatformIcons from './GamePlatformIcons';
import GameRatingBadge from './GameRatingBadge';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const croppedImage = cropImage(game.background_image);
  const platforms = game.parent_platforms?.map(({ platform }) => platform);

  return (
    <Card maxW="xl" height="full">
      <Image src={croppedImage} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <GamePlatformIcons platforms={platforms} />
          <GameRatingBadge gameRating={game.metacritic} />
        </HStack>
        <Heading size="md">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
