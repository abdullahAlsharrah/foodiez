import React, { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import categoryStore from "../../stores/categoryStore";

const CategoryModal = ({ isOpen, closeModal }) => {
  const [category, setCategory] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };
  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createCategory(category);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Add Category"
    >
      <form onSubmit={handleSubmit}>
        {" "}
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              type="text"
              value={category.name}
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

export default CategoryModal;
