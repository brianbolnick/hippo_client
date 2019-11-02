import React from "react";
import styled from "styled-components";
import { colors, avenir } from "styles/css-variables";

const StyledDivider = styled.hr`
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: ${colors.black};
  font-family: ${avenir};
  font-weight: 700;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
  width: ${({ full }) => (full ? "100%" : "50%")};
	margin: ${({margin}) => `${margin} auto`};

  &:before {
    content: "";
    background: linear-gradient(to right, transparent, #818078, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 1px;
  }

  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: ${colors.black};
    padding: 0 0.5em;
    line-height: 1.5em;
    color: #818078;
    background-color: #fcfcfa;
  }
`;

const Divider = ({ children, full, margin }) => {
  return <StyledDivider full={full} data-content={children} margin={margin}/>;
};

Divider.defaultProps = {
	margin: '16px'
}

export default Divider
