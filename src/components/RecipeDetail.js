import { observer } from "mobx-react";
import { DetailWrapper } from "../styles";
import IngredientList from "./IngredientList";
import { Redirect, useParams } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import ingredientStore from "../stores/ingredientStore";
import UpdateButton from "./buttons/UpdateButon";

const RecipeDetail = () => {
  const recipeName = useParams().recipeName;
  const recipe = recipeStore.recipes.find(
    (_recipe) => _recipe.slug === recipeName
  );
  const ingredients = recipe.ingredients.map((ingredient) =>
    ingredientStore.getIngredientById(ingredient.id)
  );

  if (!recipe) return <Redirect to="/recipes" />;

  //
  return (
    <>
      <DetailWrapper>
        <img src={recipe.image} alt="" />
        <p>{recipe.name}</p>
        <p>{recipe.description}</p>
        <p>{recipe.difficulty}</p>
      </DetailWrapper>
      <IngredientList ingredients={ingredients} />
      <UpdateButton recipe={recipe} />
    </>
  );
};
export default observer(RecipeDetail);
