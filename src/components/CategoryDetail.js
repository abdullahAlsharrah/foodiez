import { observer } from "mobx-react";
import { DetailWrapper } from "../styles";
import IngredientList from "./ingredientList";

import categoryStore from "../stores/categoryStore";

const CategoryDetail = () => {
  const categoryName = useParams().categoryName;
  const category = categoryStore.categories.find(
    (_category) => _category.slug === categoryName
  );

  const ingredients = bakery.ingredients.map((ingredient) =>
    ingredientStore.getIngredientById(ingredient.id)
  );

  //
  return (
    <>
      <DetailWrapper>
        <img src={category.im} alt="" />
        <p>{category.name}</p>
      </DetailWrapper>
      <IngredientList ingredients={ingredients} />
    </>
  );
};
export default observer(CategoryDetail);
