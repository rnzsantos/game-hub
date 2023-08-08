import { Container, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import GameGrid from '../components/GameGrid';

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
        <GridItem area="aside" bg="yellow">
          Aside
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
