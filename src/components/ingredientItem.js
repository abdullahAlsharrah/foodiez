import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Item } from "../styles";

const IngredientItem = ({ ingredient }) => {
  return (
    <Item>
      <img src={ingredient.image} alt="" />
      <p>{ingredient.name}</p>
    </Item>
  );
};

export default observer(IngredientItem);
