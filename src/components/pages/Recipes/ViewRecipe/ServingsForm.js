import React, { useState } from "react";
import { colors } from "styles/css-variables";
import PropTypes from "prop-types";
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
    if (servings !== 1) {
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

ServingsForm.propTypes = {
  currentServings: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ServingsForm;
