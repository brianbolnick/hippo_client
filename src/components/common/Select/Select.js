import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { colors, avenir } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';
const Control = styled.div`
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
  width: 100%;
`;

const SelectWrapper = styled.div`
  height: 2.75em;
  display: inline-block;
  max-width: 100%;
  width: 100%;
  position: relative;
  vertical-align: top;

  &:after {
    border: 2px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: ' ';
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
  svg {
    position: initial;
  }
  ${({ focus }) => focus && `path {fill: ${colors.red};}`};
`;
const StyledSelect = styled.select`
  margin: 0;
  font-family: ${avenir};
  align-items: center;
  justify-content: flex-start;
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
    inputState === 'error'
      ? `solid 2px ${colors.darkRed}`
      : `solid 1px ${colors.lightGray}`};

  height: 46px;
  line-height: 2.4em;
  border-radius: 4px;
  font-size: 1em;
  background-color: #fff;
  max-width: 100%;
  width: 100%;
  //min-width: 88px;
  padding-top: 1px;
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
  font-family: ${avenir};
`;

class Select extends React.Component {
  state = {
    focus: false
  };

  renderIcon = () => {
    const { label, icon, inputState } = this.props;

    const color = inputState === 'error' ? colors.darkRed : '#dbdbdb';
    return (
      icon && (
        <IconContainer
          label={label}
          focus={this.state.focus}
          color={color}
          name={icon}
        />
      )
    );
  };

  render() {
    const {
      children,
      onChange,
      placeholder,
      label,
      icon,
      inputState
    } = this.props;

    return (
      <Control {...this.props}>
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
          {this.renderIcon()}
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
