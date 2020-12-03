import { observer } from "mobx-react";
import { Item } from "../styles";

const IngredientItem = ({ ingredient }) => {
  return (
    <Item>
      <img src={ingredient.img} alt="" />
      <p>{ingredient.name}</p>
    </Item>
  );
};

export default observer(IngredientItem);
