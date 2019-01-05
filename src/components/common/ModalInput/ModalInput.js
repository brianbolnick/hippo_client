import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { media, colors, lato, raleway } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

const StyledInput = styled.input`
  color: ${colors.black};
  border-style: solid;
  padding: 0 1rem;
  border: none;
  border-bottom: ${({ inputState }) =>
    inputState === "error"
      ? `solid 2px ${colors.darkRed}`
      : inputState === "success"
      ? `solid 2px ${colors.green}`
      : `solid 2px ${colors.lightGray}`};
  line-height: 2em;
  max-width: 100%;
  width: 100%;
  font-size: 2em;
  text-align: center;
  font-family: ${raleway};

  ${({ icon }) =>
    icon &&
    `
		padding-left: 40px;
	`};

  &:focus {
    outline: none;
    border-color: ${({ inputState }) =>
      inputState === "success" ? colors.green : colors.red};
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 1rem;
    font-family: ${raleway};
    text-align: center;
    text-transform: uppercase;
    font-weight: 800;
    color: ${colors.darkGray};

    ${media.phone`
			font-size: 0.8rem;
	`}
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-size: 1rem;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    font-size: 1rem;
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
  top: 12px;
  z-index: 4;
  left: 0px;
  width: 32px;
  height: 32px;
  ${({ focus, inputState }) =>
    focus &&
    `
			path {
				fill: ${inputState === "success" ? colors.green : colors.red};
			}
	`};
`;

const Wrapper = styled.div``;

const Label = styled.div`
  font-family: ${lato};
  text-align: center;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 800;
  color: ${colors.darkGray};
`;

class ModalInput extends React.Component {
  state = {
    focus: false
  };

  render() {
    const { type, onChange, placeholder, label, icon, inputState } = this.props;

    return (
      <Wrapper {...this.props}>
        <Container>
          {icon && (
            <StyledIcon
              label={label}
              focus={this.state.focus}
              inputState={inputState}
              color={
                inputState === "error"
                  ? colors.darkRed
                  : inputState === "success"
                  ? colors.green
                  : "#dbdbdb"
              }
              name={
                inputState === "success"
                  ? "checkCircle"
                  : inputState === "error"
                  ? "close"
                  : icon
              }
            />
          )}
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
        {label && <Label>{label}</Label>}
      </Wrapper>
    );
  }
}

ModalInput.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  inputState: PropTypes.string
};

export default ModalInput;
