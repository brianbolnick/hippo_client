import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, varela } from "styles/css-variables";
import Select from "components/common/Select/Select";
import Input from "components/common/Input/Input";

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
    //min-width: 102px;
  }
`;

const StyledInput = styled(Input)`
  input {
    border-radius: 4px 0px 0px 4px;
    //min-width: 100px;
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
    const {
      children,
      placeholder,
      label,
      icon,
      inputState,
      defaultInputValue,
      defaultSelectValue
    } = this.props;

    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <InputContainer>
          <StyledInput
            placeholder={placeholder}
            inputState={inputState}
            onChange={this.handleInputChange}
            icon={icon}
            value={defaultInputValue}
          />
          <StyledSelect
            onChange={this.handleSelectChange}
            value={defaultSelectValue}
          >
            {children}
          </StyledSelect>
        </InputContainer>
      </Wrapper>
    );
  }
}

ControlledInput.propTypes = {
  type: PropTypes.string,
  defaultInputValue: PropTypes.string,
  defaultSelectValue: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default ControlledInput;
