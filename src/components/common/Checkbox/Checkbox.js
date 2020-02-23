import React from 'react';
import styled from 'styled-components/macro';
import { colors, avenir } from 'styles/css-variables';

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  //border: ${({ disabled }) =>
    disabled ? `solid 2px ${colors.mutedGray}` : `solid 2px ${colors.red}`};
  border-radius: 4px;
  background-color: ${colors.lightGray};
  &:after {
    content: "";
    position: absolute;
    display: none;
  }

	&:hover {
		background-color: ${colors.mutedGray};
		transition: 0.1s ease;
	}
`;

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
    opacity: 0;
    cursor: pointer;
    margin-left: -15px;
  }

  input:checked ~ ${Checkmark} {
    background-color: ${colors.black};
    border: none;
  }

  input:checked ~ ${Checkmark}:after {
    display: block;
  }

  & ${Checkmark}:after {
    left: 6px;
    top: 1px;
    width: 3px;
    height: 11px;
    border: solid ${colors.white};
    border-width: 0 3px 3px 0px;
    transform: rotate(45deg);

    &:hover {
      cursor: ${props => (props.disabled ? 'initial' : '')};
    }
  }
`;

const StyledLabel = styled.span`
  font-family: ${avenir};
  color: ${props => (props.disabled ? colors.gray : colors.black)};
  font-size: 16px;

  &:hover {
    cursor: ${props => (props.disabled ? 'default' : ' ')};
  }
`;

const Checkbox = ({
  checked,
  onChange,
  disabled,
  value,
  children,
  ...rest
}) => (
  <Container {...rest}>
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
