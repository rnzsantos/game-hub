import { Container, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Container>
            <GenreList />
          </Container>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Container maxWidth="full">
          <GameGrid />
        </Container>
      </GridItem>
    </Grid>
  );
};

export default Layout;
