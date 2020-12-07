import CategotyItem from "./RecipeItem";
import recipeStore from "../stores/recipeStore";
import { observer } from "mobx-react";
import { Container } from "../styles";
import AddRecipeButton from "./buttons/AddRecipeButton";
import SearchBar from "./SearchBar";
import { useState } from "react";

const RecipeList = () => {
  const [query, setQuery] = useState("");

  const recipeList = recipeStore.recipes
    .filter((recipe) => recipe.name.toLowerCase().includes(query.toLowerCase()))
    .map((recipe) => <CategotyItem recipe={recipe} key={recipe.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Container>{recipeList}</Container>;
      <AddRecipeButton />
    </>
  );
};
export default observer(RecipeList);
