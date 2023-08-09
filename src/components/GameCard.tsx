import { Card, Heading, Image, Stack } from '@chakra-ui/react';
import Game from '../entities/Game';
import cropImage from '../services/image-url';
import GamePlatformIcons from './GamePlatformIcons';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const croppedImage = cropImage(game.background_image);
  const platforms = game.parent_platforms.map(({ platform }) => platform);

  return (
    <Card maxWidth="sm">
      <Image src={croppedImage} borderTopRadius={5} />
      <Stack marginY={5} spacing={3} paddingX={5}>
        <GamePlatformIcons platforms={platforms} />
        <Heading size="md">{game.name}</Heading>
      </Stack>
    </Card>
  );
};

export default GameCard;
