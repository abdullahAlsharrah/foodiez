import { observer } from "mobx-react";
import { DetailWrapper } from "../styles";
import IngredientList from "./IngredientList";
import { Redirect, useParams } from "react-router-dom";
import categoryStore from "../stores/categoryStore";
import ingredientStore from "../stores/ingredientStore";

const CategoryDetail = () => {
  const categoryName = useParams().categoryName;
  const category = categoryStore.categories.find(
    (_category) => _category.slug === categoryName
  );
  const ingredients = category.ingredients.map((ingredient) =>
    ingredientStore.getIngredientById(ingredient.id)
  );

  if (!category) return <Redirect to="/categories" />;

  //
  return (
    <>
      <DetailWrapper>
        <img src={category.image} alt="" />
        <p>{category.name}</p>
      </DetailWrapper>
      <IngredientList ingredients={ingredients} />
    </>
  );
};
export default observer(CategoryDetail);
