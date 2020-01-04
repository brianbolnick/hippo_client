import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  ActionButtonContainer,
  Header,
  HeaderTitle,
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
  //const handleMouseLeave = () => {
  //!listHovered && setListOpen(false);
  //};

  //const handleMouseEnterList = () => {
  //listOpen && setListHovered(true);
  //};

  const handleItemClick = item => {
    item.onClick();
    setListOpen(false);
  };

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <ActionButtonContainer ref={node}>
        <Header onClick={() => setListOpen(!listOpen)} active={listOpen}>
          <HeaderTitle>{actionName}</HeaderTitle>
          <ListIcon name="chevronDown" size="32px" />
        </Header>
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
  ),
  placeholder: PropTypes.string
};

export default ActionButton;
