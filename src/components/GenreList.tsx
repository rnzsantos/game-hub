import { HStack, Heading, Image, Link, Stack } from '@chakra-ui/react';
import data from '../data/genres';
import cropImage from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const setGenre = useGameQueryStore((s) => s.setGenre);

  return (
    <Stack spacing={3}>
      <Heading size="md">Genres</Heading>
      {data?.results.map((genre) => (
        <HStack key={genre.id}>
          <Image
            src={cropImage(genre.image_background)}
            boxSize="30px"
            fit="cover"
            rounded="lg"
          />
          <Link key={genre.id} onClick={() => setGenre(genre.id)}>
            {genre.name}
          </Link>
        </HStack>
      ))}
    </Stack>
  );
};

export default GenreList;
