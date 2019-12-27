import styled from "styled-components";
import { avenir, colors, media } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";
import Input from "components/common/Input/Input";
import Select from "components/common/Select/Select";

export const ButtonContainer = styled.div`
  display: flex;
  button {
    margin-right: 8px;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  &&& {
    & > * {
      width: ${({ three }) => (three ? "32%" : "48%")};
      min-width: ${({ three }) => (three ? "100px" : "90px")};
      ${media.tablet`	width: 100%; `};
      ${media.smallDesktop`
				width: ${({ three }) => (three ? "48%" : "100%")};
			`};
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const InputArea = styled.div`
  width: 50%;
  padding: 32px;
  box-sizing: border-box;
  ${media.tablet`
		width: 100%;
		padding: 16px;
`};
`;

export const ListArea = styled.div`
  width: 50%;
  padding: 32px;
  box-sizing: border-box;
  overflow-y: scroll;
  ${media.tablet`
		width: 100%;
		padding: 16px;
`};
`;

export const AddableContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const TempIngredient = styled.div`
  //max-width: 32%;
  background-color: ${colors.red};
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const DeleteIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ clear }) => (clear ? "" : colors.darkRed)};
    path {
      fill: ${({ clear }) => (!clear ? "" : colors.red)};
    }
    border-radius: 50%;
  }
`;

export const Notice = styled.div`
  text-align: center;
  width: 100%;
  color: ${colors.offGray};
`;

export const TempIngredientsContainer = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const StepsContainer = styled.div``;
export const Steps = styled.ol`
  padding-left: 0;
`;

export const Direction = styled.div`
  margin-bottom: 34px;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: ${avenir};
  font-weight: 500;
  span {
    font-weight: 500;
    color: ${colors.offGray};
    font-size: 1.1rem;
    margin-bottom: 16px;
    font-family: ${avenir};
  }
`;
export const TempDirection = styled.div`
  margin: 24px 0;
  letter-spacing: 1px;
  padding: 16px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border: solid 2px ${colors.red};
  border-radius: 2px;
  span {
    font-weight: 600;
    margin-right: 16px;
    color: #fe4969;
  }
`;

export const AddIngredientContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const AddIngredientLabel = styled.label`
  font-family: ${avenir};
  margin-bottom: 16px;
`;

export const StyledSelect = styled(Select)`
  width: 33%;
  margin: 0 8px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  & input {
    width: 100%;
  }
`;

export const TempDirectionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  //height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  //border: solid 4px ${colors.red};
	border-top: solid 4px #ff2e65;
  border-bottom: none;
	border-radius: 16px 16px 0 0;
	box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.1);

	${media.tablet`
		box-shadow: none;
`}
`;

export const DirectionsContainer = styled.div``;
