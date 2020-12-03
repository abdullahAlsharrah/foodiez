import "./App.css";
import CategoryDetail from "./components/CategoryDetail";
import CategoryList from "./components/CategoryList";
import IngredientList from "./components/IngredientList";
import ingredientStore from "./stores/ingredientStore";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import categoryStore from "./stores/categoryStore";
import { observer } from "mobx-react";

function App() {
  if (categoryStore.loading) return null;
  return (
    <div className="App">
      <h1>Welcome To FoodieZ</h1>
      <Link to="/">Home</Link>
      <Link to="/ingredients">Ingredients</Link>
      <Link to="/categories">Categories</Link>
      <Switch>
        <Route path="/categories/:categoryName">
          <CategoryDetail />
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
        <Route path="/ingredients">
          <IngredientList ingredients={ingredientStore.ingredients} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default observer(App);
