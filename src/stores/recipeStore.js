import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class RecipeStore {
  loading = true;
  recipes = [];

  constructor() {
    makeObservable(this, {
      recipes: observable,
      loading: observable,
    });
  }

  fetchRecipes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/recipes");
      this.recipes = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  createRecipe = async (newRecipe) => {
    // newRecipe.id = this.recipes[this.recipes.length - 1].id + 1;
    // newRecipe.slug = slugify(newRecipe.name);
    // this.recipes.push(newRecipe);
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await axios.post("http://localhost:8000/recipes", formData);
      this.recipes.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteRecipe = async (recipeId) => {
    console.log(recipeId);
    try {
      await axios.delete(`http://localhost:8000/recipes/${recipeId}`);
      this.recipes = this.recipes.filter((recipe) => recipe.id !== recipeId);
    } catch (error) {
      console.log(error);
    }
  };
  updateRecipe = async (updatedRecipe) => {
    try {
      const formData = new FormData();
      for (const key in updatedRecipe) formData.append(key, updatedRecipe[key]);
      await axios.put(
        `http://localhost:8000/recipes/${updatedRecipe.id}`,
        formData
      );
      const recipe = this.recipes.find(
        (recipe) => recipe.id === updatedRecipe.id
      );
      for (const key in recipe) recipe[key] = updatedRecipe[key];
      recipe.slug = slugify(recipe.name);
    } catch (error) {
      console.log(error);
    }
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipes();
export default recipeStore;
