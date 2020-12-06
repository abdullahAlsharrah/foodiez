import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import ingredientStore from "../../stores/ingredientStore";

const IngredientModal = ({ isOpen, closeModal }) => {
  const [ingredient, setIngredient] = useState(
    oldProduct
      ? oldProduct
      : {
          name: "",
          description: "",
          image: "",
        }
  );

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setIngredient({ ...ingredient, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(ingredient);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Ingredient"
    >
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              value={ingredient.name}
              className="form-control"
              name="name"
              onChange={handleChange}
              required
            />
          </div>
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
        <CreateButtonStyled className="btn float-right">Add</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default IngredientModal;
