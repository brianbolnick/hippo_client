import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/css-variables';
import Logo from '../../img/hippo-logo.png';
const Sidebar = styled.div`
	width: 300px;
	height: 100%;
	background-color: ${colors.black};
	padding: 16px;
	box-sizing: border-box;
`

const SidebarLink = styled(Link)`
`

const ChildrenWrapper = styled.div`
	padding: 25px;
	width: 100%;
	box-sizing: border-box;
	box-shadow: 4px 0px 4px 5px ${colors.offWhite};
`

const Page = styled.div`
	height: 100%;
	background-color: ${colors.white};
	display: flex;	
`
const Brand = styled.div`
	padding: 0 5rem;
	margin-bottom: 32px;
	margin-top: 24px;
`



const Layout = ({children}) => {
	return (
		<Page>
			<Sidebar>
				<Brand>
					<img src={Logo} style={{width: '100%'}}/>
				</Brand>
			</Sidebar>
			<ChildrenWrapper>
				{children}
			</ChildrenWrapper>
		</Page>
	)
}

Layout.propTypes = {
	children: PropTypes.any
}

export default Layout;
