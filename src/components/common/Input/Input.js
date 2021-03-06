import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { colors, avenir } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';

const StyledInput = styled.input`
  color: ${colors.black};
  border-style: solid;
  padding: 0 1rem;
  transition: background-color 0.15s, border-color 0.15s;
  border: ${({ inputState }) =>
    inputState === 'error'
      ? `solid 2px ${colors.darkRed}`
      : inputState === 'success'
      ? `solid 2px ${colors.green}`
      : `solid 1px ${colors.lightGray}`};
  height: 2.75em;
  line-height: 2.4em;
  border-radius: 4px;
  font-size: 1em;
  background-color: #fff;
  max-width: 100%;
  width: 100%;
  //min-width: 100px;

  ${({ icon }) =>
    icon &&
    `
		padding-left: 40px;
	`};

  &:focus {
    outline: none;
    border-color: ${({ inputState }) =>
      inputState === 'success' ? colors.green : colors.black};
    background-color: ${colors.white};
    border-width: 1px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 8px;
  position: relative;
  //min-width: 136px;
`;

const StyledIcon = styled(Icon)`
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
  ${({ focus, inputState }) =>
    focus &&
    `
			path {
				fill: ${inputState === 'success' ? colors.green : colors.black};
			}
	`};
`;

const Wrapper = styled.div``;

const Label = styled.label`
  font-family: ${avenir};
`;

class Input extends React.Component {
  state = {
    focus: false
  };

  renderIcon = () => {
    const { label, icon, inputState } = this.props;
    const color =
      inputState === 'error'
        ? colors.darkRed
        : inputState === 'success'
        ? colors.green
        : '#dbdbdb';

    const name =
      inputState === 'success'
        ? 'checkCircle'
        : inputState === 'error'
        ? 'close'
        : icon;

    return (
      icon && (
        <StyledIcon
          label={label}
          focus={this.state.focus}
          inputState={inputState}
          color={color}
          name={name}
        />
      )
    );
  };

  render() {
    const { type, onChange, placeholder, label, icon, inputState } = this.props;

    return (
      <Wrapper {...this.props}>
        {label && <Label>{label}</Label>}
        <Container>
          {this.renderIcon()}
          <StyledInput
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            inputState={inputState}
            icon={icon}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            {...this.props}
          />
        </Container>
      </Wrapper>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default Input;
