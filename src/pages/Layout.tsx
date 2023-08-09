import { Container, Grid, GridItem, Show } from '@chakra-ui/react';
import React from 'react';
import GameGrid from '../components/GameGrid';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container maxWidth="container.xl">
        <Grid templateAreas={`"aside main"`} gap={{ lg: 5 }}>
          <Show above="lg">
            <GridItem area="aside">
              <GenreList />
            </GridItem>
          </Show>
          <GridItem area="main">
            <GameGrid />
          </GridItem>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
