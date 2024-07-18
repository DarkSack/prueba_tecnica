import React, { useEffect, useState } from "react";
import { Image, Text, Group, Badge, Grid, Button } from "@mantine/core";
import { StarFour, Sparkle } from "phosphor-react";
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../state/favoritesSlice";
import { InfoCharacter } from "../Interfaces";
import { GoTo } from "../GlobalTools";
import { GET_CHARACTER_INFO } from "../GraphQL/GraphQL";
import { useQuery } from "@apollo/client";

interface CharacterData {
  character: InfoCharacter;
}

export const CharacterInfoView: React.FC = () => {
  const [character, setCharacter] = useState<InfoCharacter | null>(null);
  const dispatch = useDispatch();
  const path = window.location.pathname;
  const id = parseInt(path.split("/").pop() || "0", 10);
  const favoritesStored = localStorage.getItem("favorites");
  const favorites = favoritesStored ? JSON.parse(favoritesStored) : [];
  const [favorite, setFavorite] = useState(
    favorites.some((fav: { id: number }) => fav.id === id)
  );
  const { loading, data } = useQuery<CharacterData>(GET_CHARACTER_INFO, {
    variables: { id },
  });

  useEffect(() => {
    if (data && data.character) {
      setCharacter(data.character);
    }
  }, [data]);

  if (loading || !character) {
    return <div>Loading...</div>;
  }

  // Character data to display
  const characterData = {
    Name: character.name,
    Gender: character.gender,
    Status: character.status,
    "Episode Number": character.episode?.length.toString() || "0",
    "Origin Name": character.origin?.name || "Unknown",
  };

  // Location data to display
  const locationData = {
    "Origin Dimension": character.origin?.dimension || "Unknown",
    "Origin Type": character.origin?.type || "Unknown",
    "Location Name": character.location?.name || "Unknown",
    "Location Type": character.location?.type || "Unknown",
    "Location Dimension": character.location?.dimension || "Unknown",
  };

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
