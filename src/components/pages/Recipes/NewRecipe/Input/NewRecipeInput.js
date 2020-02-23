import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { colors, avenir } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';

const StyledInput = styled.input`
  color: ${colors.black};
  transition: background-color 0.15s, border-color 0.15s;
  border: none;
  border-bottom: ${({ inputState }) =>
    inputState === 'error'
      ? `solid 2px ${colors.darkRed}`
      : inputState === 'success'
      ? `solid 2px ${colors.green}`
      : `solid 1px ${colors.lightGray}`};
  height: 1.75em;
  font-size: 2em;
  font-weight: 600;
  background-color: #fff;
  max-width: 100%;
  width: 100%;

  ${({ icon }) =>
    icon &&
    `
		padding-left: 40px;
	`};

  &:focus {
    outline: none;
    border-color: ${({ inputState }) =>
      inputState === 'success' ? colors.green : colors.red};
    background-color: ${colors.white};
  }

  &::placeholder {
    font-weight: 200;
    font-size: 16px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-flow: column;
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
				fill: ${inputState === 'success' ? colors.green : colors.red};
			}
	`};
`;

const Wrapper = styled.div``;

const Label = styled.label`
  margin-top: 8px;
  text-transform: uppercase;
  font-size: 12px;
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
        <Container>
          {this.renderIcon()}
          <StyledInput
            type={type}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            inputState={inputState}
            icon={icon}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
            {...this.props}
          />
          {label && <Label>{label}</Label>}
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
