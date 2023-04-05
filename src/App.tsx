import { Grid, GridItem, Show } from '@chakra-ui/react';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile layout
        lg: `"nav nav" "aside main"`, // 1020px or larger
      }}
    >
      <GridItem
        area="nav"
        bg="coral"
      >
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          bg="gold"
        >
          Aside
        </GridItem>
      </Show>

      <GridItem
        area="main"
        bg="dodgerblue"
      >
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
