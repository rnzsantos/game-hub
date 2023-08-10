import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `'aside main'` }}
      templateColumns={{ lg: 'max-content 1fr' }}
    >
      <GridItem area="aside">
        <Show above="lg">
          <GenreList />
        </Show>
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={2} marginBottom={5}>
          <PlatformSelector />
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
