import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core";
import { SearchBar } from "./SearchBar";
import { useState, useEffect } from "react";
import { GoTo } from "../GlobalTools";
import { Character } from "../Interfaces";

/**
 * CharactersView component displays a list of characters that can be searched and reordered via drag-and-drop.
 */
const CharactersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [characters, setCharacters] = useState<Character[]>(() => {
    const favoritesStored = localStorage.getItem("favorites");
    return favoritesStored ? JSON.parse(favoritesStored) : [];
  });

  // Update localStorage whenever characters state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(characters));
  }, [characters]);

  // Filter characters based on the search term
  const filteredCharacters = characters.filter((character) =>
    [character.name, character.gender, character.status].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  /**
   * Sets the search term in the component's state.
   * @param {string} value - The search term to be set.
   */
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  /**
   * Handles the start of a drag event.
   * @param {React.DragEvent<HTMLDivElement>} e - The drag event.
   * @param {number} index - The index of the character being dragged.
   */
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  /**
   * Handles the drop event, updating the order of characters based on the dragged item.
   * @param {React.DragEvent<HTMLDivElement>} e - The drop event.
   * @param {number} index - The index where the dragged character is dropped.
   */
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    const updatedCharacters = [...characters];
    const [draggedCharacter] = updatedCharacters.splice(draggedIndex, 1);
    updatedCharacters.splice(index, 0, draggedCharacter);
    setCharacters(updatedCharacters);
  };

  /**
   * Prevents the default handling of the dragover event to allow dropping.
   * @param {React.DragEvent<HTMLDivElement>} e - The dragover event.
   */
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}>
      <SearchBar onSearch={handleSearch} />
      <Grid.Col span={12} className="flex flex-wrap">
        {filteredCharacters.map((character, index) => (
          <Card
            key={character.name}
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
  );
};

export default CharactersView;
