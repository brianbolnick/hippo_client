import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { colors, varela } from "../../styles/css-variables";

const StyledAnchor = styled.a`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 600;
  font-family: ${varela};
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }

  &:focus {
    outline: none;
  }
`;

const Anchor = props => (
  <StyledAnchor {...props}>{props.children}</StyledAnchor>
);

Anchor.propTypes = {
  children: PropTypes.any
};

export default Anchor;
