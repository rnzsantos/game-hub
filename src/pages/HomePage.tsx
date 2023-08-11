import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';

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
        <PlatformSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
