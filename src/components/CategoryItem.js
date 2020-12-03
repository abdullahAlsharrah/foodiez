import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { Item } from "../styles";

const CategoryItem = ({ category }) => {
  return (
    <Item>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} alt="" />
        <p>{category.name}</p>
      </Link>
    </Item>
  );
};

export default observer(CategoryItem);
