import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import recipeStore from "../../stores/recipeStore";
import IngredientCheckboxList from "../IngredientCheckboxList";

const RecipeModal = ({ isOpen, closeModal, oldRecipe }) => {
  export default SelectPage;
  const [recipe, setRecipe] = useState(
    oldRecipe
      ? oldRecipe
      : {
          name: "",
          description: "",
          image: "",
          ingredients: [],
        }
  );

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    recipeStore.createRecipe(recipe);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Recipe"
    >
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              value={recipe.name}
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={recipe.description}
            className="form-control"
            name="description"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingredients</label>
          <IngredientCheckboxList />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={handleImage}
            required
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldRecipe ? "Update" : "Add"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default RecipeModal;
