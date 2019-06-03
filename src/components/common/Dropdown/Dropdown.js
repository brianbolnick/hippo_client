import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { colors, varela } from "styles/css-variables";

const Container = styled.div`
  user-select: none;
  position: relative;
  width: 222px;
  border-radius: 4px;
  border: solid 1px ${colors.mutedGray};
  font-size: 1rem;
  font-weight: 500;
  font-family: ${varela};
  cursor: pointer;

  ${({ isOpen }) =>
    isOpen &&
    `
	border-color: ${colors.red};
	`}

  ${({ nav }) =>
    nav &&
    `
			border: none;
			font-size: 1rem;
	letter-spacing: 0.05em;
  width: 110px;
	`}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  position: relative;
  padding: 8px;

  span {
    margin-right: 20px;
  }

  ${({ isOpen, nav }) =>
    isOpen &&
    !nav &&
    `
    color: ${colors.red};
	`}

  ${({ nav }) =>
    nav &&
    `
			&:hover {
				color: ${colors.red};
			}
	`}
`;

const HeaderTitle = styled.div``;

const List = styled.ul`
  z-index: 10;
  position: absolute;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  padding: 15px 0;
  max-height: 215px;
  overflow-y: scroll;
  margin: 0;
  margin-top: 1px;
  box-sizing: border-box;

  ${({ nav }) =>
    nav &&
    `
			padding: 0px;
	`}
`;

const ListItem = styled.li`
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;

  ${({ nav }) =>
    nav &&
    `
		:not(:last-child) { 
			border-bottom: solid 1px ${colors.offWhite};
		}
			padding: 12px 10px;
	`}

  &:hover {
    color: ${colors.white};
    background-color: ${colors.red};
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 0;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const Dropdown = ({ nav, defaultValue, list, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!defaultValue && !displayValue) setDisplayValue(list[0].title);
  });

  const renderListItems = () =>
    list.map(item =>
      nav ? (
        <StyledLink to={item.path}>
          <ListItem nav={nav} key={`nav|route:${nav.path}`}>
            {item.title}
          </ListItem>
        </StyledLink>
      ) : (
        <ListItem nav={nav} key={item.id} onClick={onChange(item)}>
          {item.title} {item.selected && <Icon name="checkCircle" />}
        </ListItem>
      )
    );

  return (
    <Container nav={nav} isOpen={isOpen}>
      <Header nav={nav} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <HeaderTitle>{displayValue}</HeaderTitle>
        {isOpen ? (
          <StyledIcon name="chevronUp" size="30px" />
        ) : (
          <StyledIcon name="chevronDown" size="30px" />
        )}
      </Header>
      {isOpen && <List nav={nav}>{renderListItems()}</List>}
    </Container>
  );
};

Dropdown.propTypes = {
  nav: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  list: PropTypes.array.isRequired
};

Dropdown.defaultProps = {
  nav: false,
  defaultValue: null
};

export default Dropdown;
