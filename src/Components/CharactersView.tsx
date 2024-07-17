import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import { GoTo } from "../GlobalTools";

const CharactersView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const characters = [
    {
      id: "1",
      origin: {
        name: "Earth (C-137)",
        dimension: "Dimension C-137",
        type: "Planet",
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "1",
        },
        {
          id: "2",
        },
        {
          id: "3",
        },
        {
          id: "4",
        },
        {
          id: "5",
        },
        {
          id: "6",
        },
        {
          id: "7",
        },
        {
          id: "8",
        },
        {
          id: "9",
        },
        {
          id: "10",
        },
        {
          id: "11",
        },
        {
          id: "12",
        },
        {
          id: "13",
        },
        {
          id: "14",
        },
        {
          id: "15",
        },
        {
          id: "16",
        },
        {
          id: "17",
        },
        {
          id: "18",
        },
        {
          id: "19",
        },
        {
          id: "20",
        },
        {
          id: "21",
        },
        {
          id: "22",
        },
        {
          id: "23",
        },
        {
          id: "24",
        },
        {
          id: "25",
        },
        {
          id: "26",
        },
        {
          id: "27",
        },
        {
          id: "28",
        },
        {
          id: "29",
        },
        {
          id: "30",
        },
        {
          id: "31",
        },
        {
          id: "32",
        },
        {
          id: "33",
        },
        {
          id: "34",
        },
        {
          id: "35",
        },
        {
          id: "36",
        },
        {
          id: "37",
        },
        {
          id: "38",
        },
        {
          id: "39",
        },
        {
          id: "40",
        },
        {
          id: "41",
        },
        {
          id: "42",
        },
        {
          id: "43",
        },
        {
          id: "44",
        },
        {
          id: "45",
        },
        {
          id: "46",
        },
        {
          id: "47",
        },
        {
          id: "48",
        },
        {
          id: "49",
        },
        {
          id: "50",
        },
        {
          id: "51",
        },
      ],
      name: "Rick Sanchez",
      gender: "Male",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: "2",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "1",
        },
        {
          id: "2",
        },
        {
          id: "3",
        },
        {
          id: "4",
        },
        {
          id: "5",
        },
        {
          id: "6",
        },
        {
          id: "7",
        },
        {
          id: "8",
        },
        {
          id: "9",
        },
        {
          id: "10",
        },
        {
          id: "11",
        },
        {
          id: "12",
        },
        {
          id: "13",
        },
        {
          id: "14",
        },
        {
          id: "15",
        },
        {
          id: "16",
        },
        {
          id: "17",
        },
        {
          id: "18",
        },
        {
          id: "19",
        },
        {
          id: "20",
        },
        {
          id: "21",
        },
        {
          id: "22",
        },
        {
          id: "23",
        },
        {
          id: "24",
        },
        {
          id: "25",
        },
        {
          id: "26",
        },
        {
          id: "27",
        },
        {
          id: "28",
        },
        {
          id: "29",
        },
        {
          id: "30",
        },
        {
          id: "31",
        },
        {
          id: "32",
        },
        {
          id: "33",
        },
        {
          id: "34",
        },
        {
          id: "35",
        },
        {
          id: "36",
        },
        {
          id: "37",
        },
        {
          id: "38",
        },
        {
          id: "39",
        },
        {
          id: "40",
        },
        {
          id: "41",
        },
        {
          id: "42",
        },
        {
          id: "43",
        },
        {
          id: "44",
        },
        {
          id: "45",
        },
        {
          id: "46",
        },
        {
          id: "47",
        },
        {
          id: "48",
        },
        {
          id: "49",
        },
        {
          id: "50",
        },
        {
          id: "51",
        },
      ],
      name: "Morty Smith",
      gender: "Male",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: "3",
      origin: {
        name: "Earth (Replacement Dimension)",
        dimension: "Replacement Dimension",
        type: "Planet",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "6",
        },
        {
          id: "7",
        },
        {
          id: "8",
        },
        {
          id: "9",
        },
        {
          id: "10",
        },
        {
          id: "11",
        },
        {
          id: "12",
        },
        {
          id: "14",
        },
        {
          id: "15",
        },
        {
          id: "16",
        },
        {
          id: "17",
        },
        {
          id: "18",
        },
        {
          id: "19",
        },
        {
          id: "20",
        },
        {
          id: "21",
        },
        {
          id: "22",
        },
        {
          id: "23",
        },
        {
          id: "24",
        },
        {
          id: "25",
        },
        {
          id: "26",
        },
        {
          id: "27",
        },
        {
          id: "29",
        },
        {
          id: "30",
        },
        {
          id: "31",
        },
        {
          id: "32",
        },
        {
          id: "33",
        },
        {
          id: "34",
        },
        {
          id: "35",
        },
        {
          id: "36",
        },
        {
          id: "38",
        },
        {
          id: "39",
        },
        {
          id: "40",
        },
        {
          id: "41",
        },
        {
          id: "42",
        },
        {
          id: "43",
        },
        {
          id: "44",
        },
        {
          id: "45",
        },
        {
          id: "46",
        },
        {
          id: "47",
        },
        {
          id: "48",
        },
        {
          id: "49",
        },
        {
          id: "51",
        },
      ],
      name: "Summer Smith",
      gender: "Female",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: "4",
      origin: {
        name: "Earth (Replacement Dimension)",
        dimension: "Replacement Dimension",
        type: "Planet",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "6",
        },
        {
          id: "7",
        },
        {
          id: "8",
        },
        {
          id: "9",
        },
        {
          id: "10",
        },
        {
          id: "11",
        },
        {
          id: "12",
        },
        {
          id: "14",
        },
        {
          id: "15",
        },
        {
          id: "16",
        },
        {
          id: "18",
        },
        {
          id: "19",
        },
        {
          id: "20",
        },
        {
          id: "21",
        },
        {
          id: "22",
        },
        {
          id: "23",
        },
        {
          id: "24",
        },
        {
          id: "25",
        },
        {
          id: "26",
        },
        {
          id: "27",
        },
        {
          id: "28",
        },
        {
          id: "29",
        },
        {
          id: "30",
        },
        {
          id: "31",
        },
        {
          id: "32",
        },
        {
          id: "33",
        },
        {
          id: "34",
        },
        {
          id: "35",
        },
        {
          id: "36",
        },
        {
          id: "38",
        },
        {
          id: "39",
        },
        {
          id: "40",
        },
        {
          id: "41",
        },
        {
          id: "42",
        },
        {
          id: "43",
        },
        {
          id: "44",
        },
        {
          id: "45",
        },
        {
          id: "46",
        },
        {
          id: "47",
        },
        {
          id: "48",
        },
        {
          id: "49",
        },
        {
          id: "51",
        },
      ],
      name: "Beth Smith",
      gender: "Female",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      id: "5",
      origin: {
        name: "Earth (Replacement Dimension)",
        dimension: "Replacement Dimension",
        type: "Planet",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "6",
        },
        {
          id: "7",
        },
        {
          id: "8",
        },
        {
          id: "9",
        },
        {
          id: "10",
        },
        {
          id: "11",
        },
        {
          id: "12",
        },
        {
          id: "13",
        },
        {
          id: "14",
        },
        {
          id: "15",
        },
        {
          id: "16",
        },
        {
          id: "18",
        },
        {
          id: "19",
        },
        {
          id: "20",
        },
        {
          id: "21",
        },
        {
          id: "22",
        },
        {
          id: "23",
        },
        {
          id: "26",
        },
        {
          id: "29",
        },
        {
          id: "30",
        },
        {
          id: "31",
        },
        {
          id: "32",
        },
        {
          id: "33",
        },
        {
          id: "35",
        },
        {
          id: "36",
        },
        {
          id: "38",
        },
        {
          id: "39",
        },
        {
          id: "40",
        },
        {
          id: "41",
        },
        {
          id: "42",
        },
        {
          id: "43",
        },
        {
          id: "44",
        },
        {
          id: "45",
        },
        {
          id: "46",
        },
        {
          id: "47",
        },
        {
          id: "48",
        },
        {
          id: "49",
        },
        {
          id: "50",
        },
        {
          id: "51",
        },
      ],
      name: "Jerry Smith",
      gender: "Male",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
      id: "6",
      origin: {
        name: "Abadango",
        dimension: "unknown",
        type: "Cluster",
      },
      location: {
        name: "Abadango",
        type: "Cluster",
        dimension: "unknown",
      },
      episode: [
        {
          id: "27",
        },
      ],
      name: "Abadango Cluster Princess",
      gender: "Female",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
      id: "7",
      origin: {
        name: "Earth (Replacement Dimension)",
        dimension: "Replacement Dimension",
        type: "Planet",
      },
      location: {
        name: "Testicle Monster Dimension",
        type: "Dimension",
        dimension: "Testicle Monster Dimension",
      },
      episode: [
        {
          id: "10",
        },
        {
          id: "11",
        },
      ],
      name: "Abradolf Lincler",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      id: "8",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "28",
        },
      ],
      name: "Adjudicator Rick",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
      id: "9",
      origin: {
        name: "Earth (Replacement Dimension)",
        dimension: "Replacement Dimension",
        type: "Planet",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "24",
        },
      ],
      name: "Agency Director",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
    {
      id: "10",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Worldender's lair",
        type: "Planet",
        dimension: "unknown",
      },
      episode: [
        {
          id: "25",
        },
      ],
      name: "Alan Rails",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
    {
      id: "11",
      origin: {
        name: "Earth (C-137)",
        dimension: "Dimension C-137",
        type: "Planet",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "12",
        },
      ],
      name: "Albert Einstein",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
      id: "12",
      origin: {
        name: "Earth (C-137)",
        dimension: "Dimension C-137",
        type: "Planet",
      },
      location: {
        name: "Anatomy Park",
        type: "Microverse",
        dimension: "Dimension C-137",
      },
      episode: [
        {
          id: "3",
        },
      ],
      name: "Alexander",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      id: "13",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "31",
        },
      ],
      name: "Alien Googah",
      gender: "unknown",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
      id: "14",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "10",
        },
      ],
      name: "Alien Morty",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
      id: "15",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "10",
        },
      ],
      name: "Alien Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      id: "16",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
      },
      episode: [
        {
          id: "15",
        },
      ],
      name: "Amish Cyborg",
      gender: "Male",
      status: "Dead",
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      id: "17",
      origin: {
        name: "Earth (C-137)",
        dimension: "Dimension C-137",
        type: "Planet",
      },
      location: {
        name: "Anatomy Park",
        type: "Microverse",
        dimension: "Dimension C-137",
      },
      episode: [
        {
          id: "3",
        },
      ],
      name: "Annie",
      gender: "Female",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    },
    {
      id: "18",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Citadel of Ricks",
        type: "Space station",
        dimension: "unknown",
      },
      episode: [
        {
          id: "10",
        },
        {
          id: "28",
        },
      ],
      name: "Antenna Morty",
      gender: "Male",
      status: "Alive",
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
      id: "19",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "unknown",
        type: null,
        dimension: null,
      },
      episode: [
        {
          id: "10",
        },
      ],
      name: "Antenna Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    },
    {
      id: "20",
      origin: {
        name: "unknown",
        dimension: null,
        type: null,
      },
      location: {
        name: "Interdimensional Cable",
        type: "TV",
        dimension: "unknown",
      },
      episode: [
        {
          id: "8",
        },
      ],
      name: "Ants in my Eyes Johnson",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    },
  ];

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
                src={character.image ?? "https://picsum.photos/160"}
                height={160}
                alt={character.name}
              />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="capitalize" fw={500}>
                {character.name}
              </Text>
              <Badge color={character.gender == "Male" ? "blue" : "red"}>
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
  );
};

export default CharactersView;
