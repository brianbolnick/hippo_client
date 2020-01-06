import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ActionButtonContainer,
  Button,
  ButtonTitle,
  List,
  ListItem,
  ListIcon,
  Label,
  Container
} from './ActionButtonStyles';

const ActionButton = ({
  label,
  title,
  items,
  onChange,
  placeholder,
  defaultValue,
  actionName
}) => {
  const [listOpen, setListOpen] = useState(false);

  const node = useRef();

  const handleClick = e => {
    if (node && !node.current.contains(e.target)) {
      setListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  const handleItemClick = item => {
    item.onClick();
    setListOpen(false);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <ActionButtonContainer ref={node}>
        <Button onClick={() => setListOpen(!listOpen)} active={listOpen}>
          <ButtonTitle>{actionName}</ButtonTitle>
          <ListIcon name="chevronDown" size="32px" />
        </Button>
        <List open={listOpen}>
          {items.map(item => (
            <ListItem key={item.id} onClick={() => handleItemClick(item)}>
              {item.title}
            </ListItem>
          ))}
        </List>
      </ActionButtonContainer>
    </Container>
  );
};

ActionButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      onClick: PropTypes.func.isRequired
    })
  )
};

export default ActionButton;
