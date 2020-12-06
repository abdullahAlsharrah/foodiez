import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Item } from "../styles";

const RecipeItem = ({ recipe }) => {
  return (
    <Item>
      <Link to={`/recipes/${recipe.slug}`}>
        <img src={recipe.image} alt="" />
        <p>{recipe.name}</p>
      </Link>
    </Item>
  );
};

export default observer(RecipeItem);
