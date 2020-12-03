import CategotyItem from "./CategoryItem";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import { Container } from "../styles";

const CategoryList = () => {
  const categoryList = categoryStore.categories.map((category) => (
    <CategotyItem category={category} key={category.id} />
  ));

  return <Container>{categoryList}</Container>;
};

export default observer(CategoryList);
