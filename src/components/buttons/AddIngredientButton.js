import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import IngredientModal from "../modals/IngredientModal";
const AddIngredientButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <IngredientModal isOpen={isOpen} closeModal={closeModal} />
      </>
    </div>
  );
};

export default AddIngredientButton;
