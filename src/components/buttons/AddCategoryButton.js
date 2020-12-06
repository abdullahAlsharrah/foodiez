import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import CategoryModal from "../modals/CategoryModal";
const AddCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <CategoryModal isOpen={isOpen} closeModal={closeModal} />
      </>
    </div>
  );
};

export default AddCategoryButton;
