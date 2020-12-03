import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class CategoryStore {
  categories = [];

  constructor() {
    makeObservable(this, {
      categories: observable,
    });
  }

  fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8000/categories");
      this.categories = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createCategory = async (newCategory) => {
    // newCategory.id = this.categories[this.categories.length - 1].id + 1;
    // newCategory.slug = slugify(newCategory.name);
    // this.categories.push(newCategory);
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await axios.post(
        "http://localhost:8000/categories",
        formData
      );
      this.categories.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteCategory = async (categoryId) => {
    console.log(categoryId);
    try {
      await axios.delete(`http://localhost:8000/categories/${categoryId}`);
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    } catch (error) {
      console.log(error);
    }
  };
}
const categoryStore = new CategoryStore();
categoryStore.fetchCategories();
export default categoryStore;
