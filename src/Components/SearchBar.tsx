import { Grid } from "@mantine/core";
import { Input, InputIcon } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { SearchBarProps } from "../Interfaces";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Grid.Col span={12} className="mt-3">
      <fieldset className="relative max-w-xl">
        <Input
          onChange={handleInputChange}
          placeholder="Buscar personaje"
          className="ps-11"
        />
        <InputIcon>
          <MagnifyingGlass size={19} color="#AFBACA" />
        </InputIcon>
      </fieldset>
    </Grid.Col>
  );
};
