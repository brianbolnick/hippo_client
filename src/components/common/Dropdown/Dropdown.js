import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

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
	border: 1px solid #dfdfdf;
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
	border-top: none;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	background-color: #fff;
	box-shadow: 0 2px 5px -1px #e8e8e8;
	font-weight: 700;
	padding: 15px 0;
	max-height: 215px;
	overflow-y: scroll;
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

class Dropdown extends Component{
	constructor(props){
		super(props)
		this.state = {
			listOpen: false,
			headerTitle: this.props.title
		}
		this.close = this.close.bind(this)
	}

	//componentDidUpdate(){
		//const { listOpen } = this.state
		//setTimeout(() => {
			//if(listOpen){
				//window.addEventListener('click', this.close)
			//}
			//else{
				//window.removeEventListener('click', this.close)
			//}
		//}, 0)
	//}

	//componentWillUnmount(){
		//window.removeEventListener('click', this.close)
	//}

	close(timeOut){
		this.setState({
			listOpen: false
		})
	}

	selectItem(title, id, stateKey){
		this.setState({
			headerTitle: title,
			listOpen: false
		}, this.props.resetThenSet(id, stateKey))
	}

	toggleList(){
		this.setState(prevState => ({
			listOpen: !prevState.listOpen
		}))
	}

	render(){

		const { list, onChange } = this.props
		const { listOpen, headerTitle } = this.state

		return(
			<Container>
			<Header onClick={() => this.toggleList()}>
			<HeaderTitle>{headerTitle}</HeaderTitle>
			{listOpen
				? <Icon name="chevronUp" />
				:	<Icon name="chevronDown" />
			}
			</Header>
			{listOpen && <List>
				{list.map((item)=> (
					<ListItem 
						key={item.id} 
						onClick={onChange(item)}
					>
					{item.title} {item.selected && <Icon name="checkCircle"/>}
					</ListItem>
				))}
				</List>}
			</Container>
		)
	}
}

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	children: PropTypes.any
}

export default Dropdown;
