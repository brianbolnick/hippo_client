import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, avenir } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

const StyledTextarea = styled.textarea`
  color: ${colors.black};
  transition: background-color 0.15s, border-color 0.15s;
  border: ${({ inputState }) =>
    inputState === "error"
      ? `solid 2px ${colors.darkRed}`
      : `solid 1px ${colors.lightGray}`};
  background-color: #fff;
  max-width: 100%;
  width: 100%;
  height: 10em;
  padding: 0.75rem;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;

  ${({ icon }) =>
    icon &&
    `
		padding-left: 40px;
	`};

  &:focus {
    outline: none;
    border-color: ${colors.red};
    background-color: ${colors.white};
  }

  &::placeholder {
    font-weight: 200;
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
  ${({ focus }) => focus && `path {fill: ${colors.red};}`};
`;

const Wrapper = styled.div``;

const Label = styled.label`
  margin-top: 8px;
  text-transform: uppercase;
  font-size: 12px;
  font-family: ${avenir};
`;

class Textarea extends React.Component {
  state = {
    focus: false
  };

  render() {
    const { onChange, placeholder, label, icon, inputState } = this.props;

    return (
      <Wrapper {...this.props}>
        <Container>
          {icon && (
            <StyledIcon
              label={label}
              focus={this.state.focus}
              color={inputState === "error" ? colors.darkRed : "#dbdbdb"}
              name={icon}
            />
          )}
          <StyledTextarea
            placeholder={placeholder}
            onChange={onChange}
            value={this.state.text || this.props.value}
            inputState={inputState}
            icon={icon}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
          />
          {label && <Label>{label}</Label>}
        </Container>
      </Wrapper>
    );
  }
}

Textarea.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default Textarea;
