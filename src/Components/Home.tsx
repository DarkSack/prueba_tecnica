import { FC } from "react";
import { Grid, Tabs } from "@mantine/core";
import CharactersView from "./CharactersView";
import FavoritesView from "./FavoritesView";

export const Home: FC = () => {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Tabs variant="pills" defaultValue="characters">
          <Tabs.List grow>
            <Tabs.Tab value="characters">Personajes</Tabs.Tab>
            <Tabs.Tab value="favorites">Favoritos</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="characters">
            <CharactersView />
          </Tabs.Panel>
          <Tabs.Panel value="favorites">
            <FavoritesView />
          </Tabs.Panel>
        </Tabs>
      </Grid.Col>
    </Grid>
  );
};
