import CategotyItem from "./CategoryItem";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";

const CategoryList = () => {
  const categoryList = categoryStore.categories.map((category) => (
    <CategotyItem category={category} key={category.id} />
  ));

  return <>{categoryList}</>;
};

export default observer(CategoryList);
