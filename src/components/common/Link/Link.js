import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { colors, avenir } from "styles/css-variables";
import { Link as RouterLink } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 600;
  font-family: ${avenir};
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }

  &:focus {
    outline: none;
  }
`;

const Link = ({ children, to }) => <StyledLink to={to}>{children}</StyledLink>;

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string.isRequired
};

export default Link;
