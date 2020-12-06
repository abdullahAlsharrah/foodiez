import CategotyItem from "./CategoryItem";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import { Container } from "../styles";
import AddCategoryButton from "./buttons/AddCategoryButton";

const CategoryList = () => {
  const [query, setQuery] = useState("");

  const categoryList = categoryStore.categories
    .filter((catedory) =>
      catedory.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategotyItem category={category} key={category.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <Container>{categoryList}</Container>
      <AddCategoryButton />
    </>
  );
};

export default observer(CategoryList);
