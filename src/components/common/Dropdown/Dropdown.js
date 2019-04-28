import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";

const Container = styled.div`
  user-select: none;
  position: relative;
  width: 222px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 38px;
  //border: 1px solid #dfdfdf;
  border-radius: 3px;
  cursor: default;
  position: relative;
  background-color: #fff;

  span {
    margin-right: 20px;
  }
`;

const HeaderTitle = styled.div`
  font-weight: 300;
  margin: 2px 20px;
  margin-right: 30px;
`;

const List = styled.ul`
  z-index: 10;
  position: absolute;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  font-weight: 700;
  padding: 15px 0;
  max-height: 215px;
  overflow-y: scroll;
  margin: 0;
  box-sizing: border-box;
`;

const ListItem = styled.li`
  width: 100%;
  font-size: 1.5rem;
  padding: 8px 10px;
  line-height: 1.6rem;
  cursor: default;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: #fff;
    background-color: #ffcc01;
  }
`;

const Dropdown = ({ defaultValue, list, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    if (!defaultValue && !displayValue) setDisplayValue(list[0].title);
  });

  const renderListItems = () =>
    list.map(item => (
      <ListItem key={item.id} onClick={onChange(item)}>
        {item.title} {item.selected && <Icon name="checkCircle" />}
      </ListItem>
    ));

  return (
    <Container>
      <Header onClick={() => setIsOpen(!isOpen)}>
        <HeaderTitle>{displayValue}</HeaderTitle>
        {isOpen ? <Icon name="chevronUp" /> : <Icon name="chevronDown" />}
      </Header>
      {isOpen && <List>{renderListItems()}</List>}
    </Container>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  list: PropTypes.array.isRequired
};

export default Dropdown;
