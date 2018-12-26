import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, varela } from "styles/css-variables";
//import Icon from "../Icon/Icon";
import Select from "components/Select/Select";
import Input from "components/Input/Input";
//const Control = styled.div`
//box-sizing: border-box;
//clear: both;
//font-size: 1rem;
//position: relative;
//text-align: left;
//width: 48px;
//`;

//const SelectWrapper = styled.div`
//height: 2.75em;
//display: inline-block;
//max-width: 100%;
//width: 100%;
//position: relative;
//vertical-align: top;

//&:after {
//border: 3px solid transparent;
//border-radius: 2px;
//border-right: 0;
//border-top: 0;
//content: " ";
//display: block;
//height: 0.625em;
//margin-top: -0.4375em;
//pointer-events: none;
//position: absolute;
//top: 50%;
//transform: rotate(-45deg);
//transform-origin: center;
//width: 0.625em;

//border-color: ${colors.red};
//right: 1.125em;
//z-index: 4;
//}
//`;

//const IconContainer = styled(Icon)`
//pointer-events: none;
//position: absolute;
//top: 9px;
//z-index: 4;
//left: 8px;
//width: 20px;
//height: 20px;
//${({ focus }) => focus && `path {fill: ${colors.red};}`};
//`;

//const StyledSelect = styled.select`
//margin: 0;
//font-family: ${varela};
//align-items: center;
//justify-content: flex-start;
//position: relative;
//vertical-align: top;
//border-color: #dbdbdb;
//cursor: pointer;
//display: block;
//outline: 0;
//padding-right: 2.5em;
//color: ${colors.black};
//border-style: solid;
//padding: 0 1rem;
//transition: background-color 0.15s, border-color 0.15s;
//border: ${({ inputState }) =>
//inputState === "error"
//? `solid 2px ${colors.darkRed}`
//: `solid 2px ${colors.lightGray}`};

//height: 48px;
//line-height: 2.4em;
//border-radius: 4px;
//font-size: 1em;
//background-color: #fff;
//max-width: 100%;
//width: 100%;
//padding-top: 2px;
//[> for Firefox <]
//-moz-appearance: none;
//[> for Chrome <]
//-webkit-appearance: none;

//&::-ms-expand {
//display: none;
//}

//${({ icon }) => icon && `padding-left: 40px; `};

//&:focus {
//outline: none;
//border-color: ${colors.red};
//background-color: ${colors.white};
//}
//`;

//const Container = styled.div`
//display: flex;
//width: 100%;
//margin-bottom: 15px;
//margin-top: 8px;
//position: relative;
//`;

const Label = styled.label`
  font-family: ${varela};
`;

const Wrapper = styled.div`
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

const StyledSelect = styled(Select)`
  select {
    border-radius: 0 4px 4px 0;
  }
`;

const StyledInput = styled(Input)`
  input {
    border-radius: 4px 0px 0px 4px;
    border-right: none;
    :focus {
      border-right: solid 2px ${colors.red};
    }
  }
`;

class ControlledInput extends React.Component {
  state = {
    inputVal: "",
    selectVal: this.props.defaultSelectValue
  };

  handleInputChange = e => {
    this.setState({ inputVal: e.target.value }, () => {
      this.props.onChange(`${this.state.inputVal} ${this.state.selectVal}`);
    });
  };

  handleSelectChange = e => {
    this.setState({ selectVal: e.target.value }, () => {
      this.props.onChange(`${this.state.inputVal} ${this.state.selectVal}`);
    });
  };

  render() {
    const { children, placeholder, label, icon, inputState } = this.props;

    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <InputContainer>
          <StyledInput
            placeholder={placeholder}
            inputState={inputState}
            onChange={this.handleInputChange}
            icon={icon}
          />
          <StyledSelect onChange={this.handleSelectChange}>
            {children}
          </StyledSelect>
        </InputContainer>
      </Wrapper>
    );
  }
}

ControlledInput.propTypes = {
  type: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string,
  defaultSelectValue: PropTypes.string.isRequired
};

export default ControlledInput;
