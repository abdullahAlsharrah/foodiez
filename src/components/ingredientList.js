import IngredientItem from "./IngredientItem";
// import ingredientStore from "../stores/ingredientStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { useState } from "react";

const IngredientList = ({ ingredients }) => {
  const [query, setQuery] = useState("");

  const ingredientsList = ingredients
    .filter((ingredient) =>
      ingredient.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((ingredient) => (
      <IngredientItem ingredient={ingredient} key={ingredient.id} />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      {ingredientsList}
    </>
  );
};

export default observer(IngredientList);
