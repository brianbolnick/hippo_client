import styled from "styled-components/macro";
import { colors, avenir, raleway } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  transition: 0.1s;
  margin-bottom: 32px;
  &:hover {
    border-radius: 8px;
    box-shadow: 0 15px 5px -11px rgba(0, 0, 0, 0.26),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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
  justify-content: space-between;
  padding: 16px;
  transition: 0.1s;
  margin-bottom: 32px;
  border-radius: 8px;
  box-shadow: 0 15px 5px -11px rgba(0, 0, 0, 0.26),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
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

export const StepNumber = styled.span`
  font-weight: 500;
  color: ${colors.black};
  font-size: 2rem;
  margin-bottom: 16px;
  font-family: ${raleway};
  margin-right: 24px;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
