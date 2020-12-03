import logo from "./logo.svg";
import "./App.css";
import CategoryDetail from "./components/CategoryDetail";
import CategoryList from "./components/CategoryList";
import IngredientList from "./components/ingredientList";
import ingredientStore from "./stores/ingredientStore";

function App() {
  return (
    <div className="App">
      <h1>Welcome To FoodieZ</h1>
      <Link to="/">Home</Link>
      <Link to="/Ingredients">Ingredients</Link>
      <Link to="/Categorys">Categorys</Link>
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

export default App;
