import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, sourceSans } from "../../styles/css-variables";
import Icon from "../Icon/Icon";

const StyledInput = styled.input`
  color: ${colors.black};
  border-style: solid;
  padding: 0 1rem;
  transition: background-color 0.15s, border-color 0.15s;
  border: solid 2px ${colors.lightGray};
  height: 2.25em;
  line-height: 2.4em;
  border-radius: 2px;
  font-size: 1em;
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
    border-color: ${colors.blue};
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

const StyledIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  top: 5px;
  z-index: 4;
  left: 8px;
  width: 20px;
  height: 20px;
  ${({ focus }) => focus && `path {fill: ${colors.blue};}`};
`;

const Wrapper = styled.div``;

const Label = styled.label`
  font-weight: 600;
  font-family: ${sourceSans};
`;

class Input extends React.Component {
  state = {
    focus: false
  };

  render() {
    const { type, onChange, placeholder, label, icon } = this.props;

    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <Container>
          {icon && (
            <StyledIcon
              label={label}
              focus={this.state.focus}
              color="#dbdbdb"
              name={icon}
            />
          )}
          <StyledInput
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            icon={icon}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
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
  icon: PropTypes.string
};

export default Input;
