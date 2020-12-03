import { makeObservable, observable, action } from "mobx";
import axios from "axios";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeObservable(this, {
      ingredients: observable,
    });
  }

  getIngredientById = (ingredientId) =>
    this.ingredients.find((ingredient) => ingredient.id === ingredientId);

  fetchIngredients = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/ingredients/`);
      this.ingredients = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  createIngredient = async (newIngredient) => {
    // newIngredient.id = this.ingredients[this.ingredients.length - 1].id + 1;
    // newIngredient.slug = slugify(newIngredient.name);
    // this.ingredients.push(newIngredient);
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const res = await axios.post(
        "http://localhost:8000/ingredients",
        formData
      );
      this.ingredients.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  deleteIngredient = async (ingredientId) => {
    console.log(ingredientId);
    try {
      await axios.delete(`http://localhost:8000/ingredients/${ingredientId}`);
      this.ingredients = this.ingredients.filter(
        (ingredient) => ingredient.id !== ingredientId
      );
    } catch (error) {
      console.log(error);
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();
export default ingredientStore;
