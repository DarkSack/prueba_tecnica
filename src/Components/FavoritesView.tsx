import React, { useState, useEffect, useMemo } from "react";
import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core";
import { SearchBar } from "./SearchBar";
import { GoTo } from "../GlobalTools";
import { Character } from "../Interfaces";

const CharactersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>(() => {
    const favoritesStored = localStorage.getItem("favorites");
    return favoritesStored ? JSON.parse(favoritesStored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(characters));
  }, [characters]);

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) =>
        [character.name, character.gender, character.status].some((field) =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
    [characters, searchTerm]
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (!isNaN(dragIndex) && dragIndex !== dropIndex) {
      setCharacters((prevCharacters) => {
        const newCharacters = [...prevCharacters];
        const [draggedCharacter] = newCharacters.splice(dragIndex, 1);
        newCharacters.splice(dropIndex, 0, draggedCharacter);
        return newCharacters;
      });
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <SearchBar onSearch={handleSearch} />
      <Grid.Col span={12} className="flex flex-wrap">
        {filteredCharacters.map((character, index) => (
          <Card
            key={character.id}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            className="mx-4 mt-4 text-wrap max-w-64"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            onClick={() => GoTo(`/character/${character.id}`)}
          >
            <Card.Section>
              <Image src={character.image} height={160} alt={character.name} />
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
  );
};

export default CharactersView;
