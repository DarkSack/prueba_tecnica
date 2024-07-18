import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core";
import { SearchBar } from "./SearchBar";
import { useEffect, useState } from "react";
import { GoTo } from "../GlobalTools";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../GraphQL/GraphQL";
import { LoadingCharacters } from "./LoadingViews/LoadingCharacters";
import { Character } from "../Interfaces";

const CharactersView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]);
  const { loading, data: charactersData } = useQuery(GET_CHARACTERS);

  useEffect(() => {
    if (charactersData) setCharacters(charactersData.characters.results);
  }, [charactersData]);

  const filteredCharacters = characters.filter((character) =>
    [character.name, character.gender, character.status].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  /**
   * Purpose: Set search term in state.
   * @param {string} value
   */
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  return (
    <>
      {loading ? (
        <LoadingCharacters />
      ) : (
        <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
          <SearchBar onSearch={handleSearch} />
          <Grid.Col span={12} className="flex flex-wrap">
            {filteredCharacters.map((character) => (
              <Card
                key={character.name}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                className="mx-4 mt-4 text-wrap max-w-64"
                onClick={() => GoTo(`/character/${character.id}`)}
              >
                <Card.Section>
                  <Image
                    src={character.image}
                    height={160}
                    alt={character.name}
                  />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                  <Text className="capitalize" fw={500}>
                    {character.name}
                  </Text>
                  <Badge color={character.gender === "Male" ? "blue" : "red"}>
                    {character.gender}
                  </Badge>
                </Group>
                <Text size="sm" c="dimmed">
                  Status: {character.status}
                </Text>
              </Card>
            ))}
          </Grid.Col>
        </Grid>
      )}
    </>
  );
};

export default CharactersView;
