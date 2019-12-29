import styled from "styled-components";
import { colors, avenir } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

export const IngredientContainer = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-family: ${avenir};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  &:hover {
    padding-bottom: 1px;
    border-bottom: solid 1px ${colors.mutedGray};
  }
`;

export const EditInput = styled.input`
  width: 100%;
  margin-bottom: 12px;
  font-family: ${avenir};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  padding-bottom: 1px;
  border: none;
  font-size: 16px;
  border-bottom: solid 1px ${colors.red};
  outline: none;
`;

export const EditContainer = styled.div`
  display: flex;
`;

export const ActionsContainer = styled.div`
  display: flex;
`;

export const ActionIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    path {
      fill: ${colors.red};
    }
  }
`;
