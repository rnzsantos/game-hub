import { Button, HStack, Heading, Image, Stack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import cropImage from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <Stack spacing={3}>
      <Heading size="md">Genres</Heading>
      {data?.results.map((genre) => (
        <HStack key={genre.id}>
          <Image
            boxSize="30px"
            fit="cover"
            rounded="lg"
            src={cropImage(genre.image_background)}
          />
          <Button onClick={() => setGenreId(genre.id)} variant="link">
            {genre.name}
          </Button>
        </HStack>
      ))}
    </Stack>
  );
};

export default GenreList;
