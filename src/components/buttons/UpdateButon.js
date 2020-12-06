import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import RecipeModal from "../modals/RecipeModal";
const UpdateButton = ({ recipe }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <RecipeModal isOpen={isOpen} closeModal={closeModal} oldRecipe={recipe} />
    </>
  );
};

export default UpdateButton;
