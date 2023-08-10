import { Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';

const HomePage = () => {
  return (
    <Grid templateAreas={`"aside main"`} gap={{ lg: 10 }}>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
