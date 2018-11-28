import React from "react";
import Logo from "../../img/hippo-text.svg";
import ReactDOM from "react-dom";
import {
  NavMobile,
  Brand,
  BrandImage,
  StyledIcon,
  MobileNavLinks,
  NavLinkMobile,
  NavLinkButton
} from "./NavStyles";
import { Link } from "react-router-dom";
import { token, signOut } from "utils";

class MobileNav extends React.Component {
  state = { showMenu: false };

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  componentDidMount = () => {
    document.addEventListener("click", this.handleOutsideClick, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleOutsideClick, false);
  };

  handleOutsideClick = e => {
    const icon = ReactDOM.findDOMNode(this.iconRef);
    if (
      this.state.showMenu &&
      this.wrapperRef &&
      !this.wrapperRef.contains(e.target) &&
      !icon.contains(e.target)
    ) {
      this.setState({ showMenu: false });
    }
  };

  render() {
    const { showMenu } = this.state;
    return (
      <NavMobile auth={this.props.auth}>
        <Link to="/">
          <Brand>
            <BrandImage src={Logo} />
          </Brand>
        </Link>
        <StyledIcon
          name="menu"
          style={{ color: "#414141" }}
          onClick={this.handleClick}
          ref={node => (this.iconRef = node)}
        />
        <MobileNavLinks
          visible={showMenu}
          ref={node => (this.wrapperRef = node)}
        >
          <NavLinkMobile to="/about">About</NavLinkMobile>
          {!token && <NavLinkMobile to="/sign_in">Sign In</NavLinkMobile>}
          {token && (
            <>
              <NavLinkMobile to="/recipes">Recipes</NavLinkMobile>
              <NavLinkMobile to="/family">Family</NavLinkMobile>
              <NavLinkButton asLink onClick={signOut}>
                Sign Out
              </NavLinkButton>
            </>
          )}
        </MobileNavLinks>
      </NavMobile>
    );
  }
}

export default MobileNav;
