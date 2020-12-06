import { observer } from "mobx-react";
import { Item } from "../styles";

const IngredientItem = ({ ingredient }) => {
  return (
    <Item>
      <input type="checkbox" name="ingredients" value={ingredient.id} />
      <img src={ingredient.image} alt="" />
      <p>{ingredient.name}</p>
    </Item>
  );
};

export default observer(IngredientItem);
