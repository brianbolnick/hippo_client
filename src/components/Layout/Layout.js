import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../styles/css-variables";
import Logo from "../../img/hippo-logo.png";
import { signOut } from "../../utils";
const Sidebar = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${colors.black};
  padding: 16px;
  box-sizing: border-box;
`;

const SignOutLink = styled.div`
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 21px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &:hover {
    background-color: #8485863d;
    cursor: pointer;
  }
`;

const SidebarLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 21px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  &:hover {
    background-color: #8485863d;
  }
`;

const ChildrenWrapper = styled.div`
  padding: 25px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 4px 0px 4px 5px ${colors.offWhite};
`;

const Page = styled.div`
  height: 100%;
  background-color: ${colors.white};
  display: flex;
`;
const Brand = styled.div`
  padding: 0 5rem;
  margin-bottom: 32px;
  margin-top: 24px;
`;

const LinkGroup = styled.div`
  margin-top: 40px;
  text-align: center;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 300px;
`;
const Footer = styled.div`
  position: absolute;
  bottom: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 225px;
  color: ${colors.lightGray};
`;
const Layout = ({ children }) => {
  return (
    <Page>
      <Sidebar>
        <Brand>
          <img src={Logo} style={{ width: "100%" }} alt="" />
        </Brand>
        <LinkGroup>
          <SidebarLink to="/">Dashboard</SidebarLink>
          <SidebarLink to="/">Projects</SidebarLink>
          <SidebarLink to="/">Analytics</SidebarLink>
          <SidebarLink to="/">Support</SidebarLink>
          <SignOutLink onClick={signOut}>Sign Out</SignOutLink>
        </LinkGroup>
        <Footer>&copy; 2018</Footer>
      </Sidebar>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
