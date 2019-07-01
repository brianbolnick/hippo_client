import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import { 
	Container, 
	Header, 
	HeaderTitle, 
	List, 
	ListItem, 
	SelectedIcon 
} from './DropdownStyles'; 

	const Dropdown = ({title, list, onChange}) => {
	const [listOpen, setListOpen] = useState(false);
	const [headerTitle, setHeaderTitle] = useState(title);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick)
		return () => {
			window.removeEventListener("scroll", handleOutsideClick);
		};
	});

	const handleOutsideClick = e => {
    if (this.node && !this.node.contains(e.target)) {
			setListOpen(false)
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
  }

	const handleChange = item => {
		setHeaderTitle(item.title);
		setListOpen(false);
		onChange(item)
	}

		const node = useRef();

		return(
			<Container ref={node}>
				<Header onClick={() => setListOpen(!listOpen)}>
					<HeaderTitle>{headerTitle}</HeaderTitle>
					<Icon name={listOpen ? 'chevronUp' : 'chevronDown'} />
				</Header>

				{listOpen && (
					<List>
							{list.map((item)=> (
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
	placeholder: PropTypes.string,
	children: PropTypes.any
}

export default Dropdown;
