import React from "react";
import styled from "styled-components";
import { colors, varela } from "../../styles/css-variables";

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  height: 20px;
  display: inline-flex;
  align-items: center;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  input:checked ~ ${Checkmark} {
    background-color: transparent;
    border: none;
  }

  input:checked ~ ${Checkmark}:after {
    display: block;
  }

  & ${Checkmark}:after {
    left: 5px;
    top: -1px;
    width: 4px;
    height: 11px;
    border: solid ${colors.red};
    border-width: 0 3px 3px 0px;
    transform: rotate(45deg);

    &:hover {
      cursor: ${props => (props.disabled ? "initial" : "")};
    }
  }
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 16px;
  border: ${({ disabled }) =>
    disabled ? `solid 2px ${colors.mutedGray}` : `solid 2px ${colors.red}`};
  border-radius: 4px;
  background-color: ${props => (props.disabled ? colors.lightGray : "white")};
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const StyledLabel = styled.span`
  font-family: ${varela};
  color: ${props => (props.disabled ? colors.gray : colors.black)};
  font-size: 16px;

  &:hover {
    cursor: ${props => (props.disabled ? "default" : " ")};
  }
`;

const Checkbox = ({ checked, onChange, disabled, value, children }) => (
  <Container>
    <StyledLabel disabled={disabled}>{children}</StyledLabel>
    <input
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    <Checkmark disabled={disabled} />
  </Container>
);

export default Checkbox;
