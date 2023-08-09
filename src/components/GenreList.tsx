import { HStack, Heading, Image, Link, Stack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import croppedImageURL from '../services/croppedImageURL';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <Stack spacing={3}>
      <Heading size="md">Genres</Heading>
      {data?.results.map((genre) => (
        <HStack key={genre.id}>
          <Image
            src={croppedImageURL(genre.image_background)}
            boxSize="30px"
            fit="cover"
            rounded="lg"
          />
          <Link key={genre.id}>{genre.name}</Link>
        </HStack>
      ))}
    </Stack>
  );
};

export default GenreList;
