import { observer } from "mobx-react";
import { Item } from "../styles";

const CategoryItem = ({ category }) => {
  return (
    <Item>
      <img src={category.img} alt="" />
      <p>{category.name}</p>
    </Item>
  );
};

export default observer(CategoryItem);
