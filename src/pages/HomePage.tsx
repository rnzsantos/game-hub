import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `'main'`, lg: `'aside main'` }}
      templateColumns={{ lg: 'max-content 1fr' }}
    >
      <GridItem area="aside">
        <Show above="lg">
          <GenreList />
        </Show>
      </GridItem>
      <GridItem area="main">
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ sm: 'space-between' }}
          gap={{ base: 5, sm: 0 }}
          px={5}
        >
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
