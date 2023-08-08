import { Grid, GridItem, Show } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="red">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="green">
        Grid
      </GridItem>
    </Grid>
  );
};

export default Layout;
