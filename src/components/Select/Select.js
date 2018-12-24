import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, varela } from "styles/css-variables";
import Icon from "../Icon/Icon";

const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
  width: 100%;
`;

const SelectWrapper = styled.div`
  height: 2.25em;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  position: relative;
  vertical-align: top;

  &:after {
    border: 3px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;

    border-color: ${colors.red};
    right: 1.125em;
    z-index: 4;
  }
`;

const IconContainer = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 9px;
  z-index: 4;
  left: 8px;
  width: 20px;
  height: 20px;
  ${({ focus }) => focus && `path {fill: ${colors.red};}`};
`;

const StyledSelect = styled.select`
  margin: 0;
  font-family: ${varela};
  align-items: center;
  justify-content: flex-start;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  border-color: #dbdbdb;
  cursor: pointer;
  display: block;
  outline: 0;
  padding-right: 2.5em;
  color: ${colors.black};
  border-style: solid;
  padding: 0 1rem;
  transition: background-color 0.15s, border-color 0.15s;
  border: ${({ inputState }) =>
    inputState === "error"
      ? `solid 2px ${colors.darkRed}`
      : `solid 2px ${colors.lightGray}`};

  height: 2.75em;
  line-height: 2.4em;
  border-radius: 4px;
  font-size: 1em;
  background-color: #fff;
  max-width: 100%;
  width: 100%;

  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;

  &::-ms-expand {
    display: none;
  }

  ${({ icon }) => icon && `padding-left: 40px; `};

  &:focus {
    outline: none;
    border-color: ${colors.red};
    background-color: ${colors.white};
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 8px;
  position: relative;
`;

const Label = styled.label`
  font-family: ${varela};
`;

class Select extends React.Component {
  state = {
    focus: false
  };

  render() {
    const {
      type,
      children,
      onChange,
      placeholder,
      label,
      icon,
      inputState
    } = this.props;

    return (
      <Control>
        {label && <Label>{label}</Label>}
        <Container icon={icon}>
          <SelectWrapper icon={icon}>
            <StyledSelect
              onChange={onChange}
              placeholder={placeholder}
              inputState={inputState}
              icon={icon}
              onFocus={() => this.setState({ focus: true })}
              onBlur={() => this.setState({ focus: false })}
            >
              {children}
            </StyledSelect>
          </SelectWrapper>
          {icon && (
            <IconContainer
              label={label}
              focus={this.state.focus}
              color={inputState === "error" ? colors.darkRed : "#dbdbdb"}
              name={icon}
            />
          )}
        </Container>
      </Control>
    );
  }
}

Select.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default Select;
