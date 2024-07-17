import React, { useState } from "react";
import { Image, Text, Group, Badge, Grid, Button } from "@mantine/core";
import { StarFour, Sparkle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../state/favoritesSlice";
import { InfoCharacter } from "../Interfaces";
import { GoTo } from "../GlobalTools";

/**
 * CharacterInfoView component displays detailed information about a character
 * and allows the user to add or remove the character from their favorites list.
 */
export const CharacterInfoView: React.FC = () => {
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const id = parseInt(path.split("/").pop() || "0", 10);
  const favoritesStored = localStorage.getItem("favorites");
  const favorites = favoritesStored ? JSON.parse(favoritesStored) : [];
  const [favorite, setFavorite] = useState(
    favorites.some((fav: { id: number }) => fav.id === id)
  );

  // Mock character data
  const character: InfoCharacter = {
    id: 1,
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
    episode: Array.from({ length: 15 }, (_, i) => ({ id: (i + 1).toString() })),
    name: "Rick Sanchez",
    gender: "Male",
    status: "Alive",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  // Character data to display
  const characterData = {
    Name: character.name,
    Gender: character.gender,
    Status: character.status,
    "Episode Number": character.episode.length,
    "Origin Name": character.origin.name,
  };

  // Location data to display
  const locationData = {
    "Origin Dimension": character.origin.dimension,
    "Origin Type": character.origin.type,
    "Location Name": character.location.name,
    "Location Type": character.location.type,
    "Location Dimension": character.location.dimension,
  };

  /**
   * Function to add or remove a favorite character.
   * @param {InfoCharacter} character - The character to add or remove from favorites.
   */
  const handleFavorite = (character: InfoCharacter) => {
    if (favorite) {
      dispatch(removeFavorite(character.id));
      setFavorite(false);
    } else {
      dispatch(addFavorite(character));
      setFavorite(true);
    }
  };

  return (
    <Grid>
      <Button onClick={() => GoTo("/")}>Regresar</Button>
      <Grid.Col span={12}>
        <Text
          variant="gradient"
          gradient={{ from: "red", to: "violet", deg: 251 }}
          size="xl"
          fw={900}
        >
          {character.name}
        </Text>
        <Badge color={character.status === "Alive" ? "green" : "red"}>
          {character.status}
        </Badge>
        {favorite ? (
          <Sparkle
            size={32}
            color="#f5c929"
            weight="fill"
            onClick={() => handleFavorite(character)}
            className="cursor-pointer"
          />
        ) : (
          <StarFour
            className="cursor-pointer"
            size={32}
            onClick={() => handleFavorite(character)}
          />
        )}
      </Grid.Col>

      <Grid.Col span={4}>
        <Image
          src={character.image}
          radius="md"
          height={400}
          width={400}
          alt={character.name}
        />
      </Grid.Col>

      <Grid.Col span={2} className="mr-20">
        {Object.entries(characterData).map(([key, value]) => (
          <Group key={key}>
            <Text
              size="xl"
              fw={900}
              w={200}
              variant="gradient"
              gradient={{ from: "lime", to: "blue", deg: 249 }}
            >
              {key}:
            </Text>
            <Text fw={500}>{value}</Text>
          </Group>
        ))}
      </Grid.Col>

      <Grid.Col span={2} className="ml-20">
        {Object.entries(locationData).map(([key, value]) => (
          <Group key={key}>
            <Text
              size="xl"
              fw={900}
              w={200}
              variant="gradient"
              gradient={{ from: "lime", to: "blue", deg: 249 }}
            >
              {key}:
            </Text>
            <Text fw={500}>{value}</Text>
          </Group>
        ))}
      </Grid.Col>
    </Grid>
  );
};
