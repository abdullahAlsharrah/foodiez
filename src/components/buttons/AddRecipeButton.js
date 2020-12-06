import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import RecipeModal from "../modals/RecipeModal";
const AddRecipeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <RecipeModal isOpen={isOpen} closeModal={closeModal} />
      </>
    </div>
  );
};

export default AddRecipeButton;
