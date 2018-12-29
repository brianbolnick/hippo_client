import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors, varela } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

const StyledAddableInput = styled.textarea`
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
  border-radius: 4px 0 0 4px;
  border-right: none;
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
  ${({ focus }) => focus && `path {fill: ${colors.red};}`};
`;

const Wrapper = styled.div``;

const Label = styled.label`
  font-family: ${varela};
`;

const AddContainer = styled.div`
  height: 100%;
  color: ${colors.white};
  border-style: solid;
  border: solid 2px ${colors.red};
  border-radius: 0 4px 4px 0;
  background-color: ${colors.red};
  box-sizing: border-box;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;
  :hover {
    opacity: 0.9;
  }
`;

const AddIcon = styled(Icon)`
  height: 32px;
`;
class AddableInput extends React.Component {
  state = {
    focus: false
  };

  render() {
    const { onAddClick, placeholder, label, icon, inputState } = this.props;

    return (
      <Wrapper {...this.props}>
        {label && <Label>{label}</Label>}
        <Container>
          {icon && (
            <StyledIcon
              label={label}
              focus={this.state.focus}
              color={inputState === "error" ? colors.darkRed : "#dbdbdb"}
              name={icon}
            />
          )}
          <StyledAddableInput
            placeholder={placeholder}
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
            inputState={inputState}
            icon={icon}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
          />
          <AddContainer
            onClick={() => {
              onAddClick(this.state.text);
              this.setState({ text: "" });
            }}
          >
            <AddIcon name="plus" />
          </AddContainer>
        </Container>
      </Wrapper>
    );
  }
}

AddableInput.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default AddableInput;
