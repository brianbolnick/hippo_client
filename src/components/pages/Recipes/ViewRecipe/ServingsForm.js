import React, { useState } from "react";
import { colors } from "styles/css-variables";
import {
  ServingsContainer,
  ServingsActionsGroup,
  ServingsLabel,
  ServingsIcon
} from "./RecipeStyledComponents";

const ServingsForm = ({ currentServings, onChange }) => {
  const [servings, setServings] = useState(currentServings);

  const onAdd = () => {
    const newServings = servings + 1;
    setServings(newServings);
    const servingsFactor = newServings / currentServings;
    onChange(servingsFactor);
  };

  const onMinus = () => {
    if (servings !== 0) {
      const newServings = servings - 1;
      setServings(newServings);
      const servingsFactor = newServings / currentServings;
      onChange(servingsFactor);
    }
  };

  return (
    <ServingsContainer>
      <ServingsLabel>
        Serving Size:{" "}
        <ServingsActionsGroup>
          <ServingsIcon
            name="minusCircle"
            color={colors.black}
            size="20px"
            onClick={onMinus}
          />

          {servings}
          <ServingsIcon
            name="plusCircle"
            size="20px"
            color={colors.black}
            onClick={onAdd}
          />
        </ServingsActionsGroup>
      </ServingsLabel>
    </ServingsContainer>
  );
};

export default ServingsForm;
