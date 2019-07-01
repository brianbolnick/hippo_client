import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { 
	Container, 
	Header, 
	HeaderTitle, 
	List, 
	ListItem, 
	SelectedIcon,
	Placeholder
} from './DropdownStyles'; 

const Dropdown = ({title, items, onChange, placeholder}) => {
	const [listOpen, setListOpen] = useState(false);
	const [headerTitle, setHeaderTitle] = useState(title);
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
			<Container ref={node}>
				<Header onClick={() => setListOpen(!listOpen)}>
						{headerTitle ? 
							<HeaderTitle>{headerTitle}</HeaderTitle> :
							<Placeholder>{placeholder}</Placeholder>
						}
					<Icon name={listOpen ? 'chevronUp' : 'chevronDown'} />
				</Header>

				{listOpen && (
					<List>
							{items.map((item)=> (
								<ListItem 
									key={item.id} 
									onClick={() => handleChange(item)}
									selected={item.selected}
								>
									{item.title} 
									{item.selected && <SelectedIcon name="checkCircle" size="20px"/>}
								</ListItem>
							))}
					</List>
				)}
			</Container>
		)
	}

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		selected: PropTypes.boolean
	})),
	placeholder: PropTypes.string
}

export default Dropdown;
