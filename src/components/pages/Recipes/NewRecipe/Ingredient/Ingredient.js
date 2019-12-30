import React, { useState, useEffect, useRef } from "react";
import {
  ActionIcon,
  IngredientContainer,
  ActionsContainer,
  EditInput,
  EditContainer
} from "./IngredientStyles";

const Ingredient = ({ ingredient, onUpdate, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(ingredient);

  const editRef = useRef();

  useEffect(() => {
    editRef.current && editRef.current.focus();
  }, [isEditMode]);

  const handleEditSave = () => {
    setIsEditMode(false);
    onUpdate(ingredient, editValue);
  };

  const handleKeyPress = event => event.key === "Enter" && handleEditSave();

  return isEditMode ? (
    <EditContainer>
      <EditInput
        ref={editRef}
        value={editValue}
        onChange={e => setEditValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <ActionsContainer>
        <ActionIcon name="checkCircle" onClick={handleEditSave} />
      </ActionsContainer>
    </EditContainer>
  ) : (
    <IngredientContainer>
      <div>- {ingredient}</div>
      <ActionsContainer>
        <ActionIcon name="edit" onClick={() => setIsEditMode(true)} />
        <ActionIcon name="close" onClick={() => onDelete(ingredient)} />
      </ActionsContainer>
    </IngredientContainer>
  );
};

export default Ingredient;
