import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Icon from "components/common/Icon/Icon";
import {
  DropdownContainer,
  Header,
  HeaderTitle,
  List,
  ListItem,
  SelectedIcon,
  Placeholder,
  Label,
  Container
} from "./DropdownStyles";

const Dropdown = ({
  label,
  title,
  items,
  onChange,
  placeholder,
  defaultValue
}) => {
  const current = items.find(x => x.id === parseInt(defaultValue));
  const initial = defaultValue && current ? current.title : title;

  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(initial);

  const node = useRef();

  const handleClick = e => {
    if (node && !node.current.contains(e.target)) {
      setListOpen(false);
    }
  };

  const handleChange = selectedValue => {
    setHeaderTitle(selectedValue.title);
    setListOpen(false);
    onChange(selectedValue);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <DropdownContainer ref={node}>
        <Header onClick={() => setListOpen(!listOpen)}>
          {headerTitle ? (
            <HeaderTitle>{headerTitle}</HeaderTitle>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
          <Icon name={listOpen ? "chevronUp" : "chevronDown"} />
        </Header>

        {listOpen && (
          <List>
            {items.map(item => (
              <ListItem
                key={item.id}
                onClick={() => handleChange(item)}
                selected={item.selected}
              >
                {item.title}
                {item.selected && (
                  <SelectedIcon name="checkCircle" size="20px" />
                )}
              </ListItem>
            ))}
          </List>
        )}
      </DropdownContainer>
    </Container>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      selected: PropTypes.boolean
    })
  ),
  placeholder: PropTypes.string
};

export default Dropdown;
