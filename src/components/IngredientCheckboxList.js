import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Container } from "../styles";
import AddIngredientButton from "./buttons/AddIngredientButton";
import IngredientCheckBoxItem from "./IngredientCheckBoxItem";

const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");

  const ingredientsList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientCheckBoxItem ingredient={ingredient} key={ingredient.id} />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Container>{ingredientsList}</Container>
      <AddIngredientButton />
    </>
  );
};

export default observer(IngredientList);
