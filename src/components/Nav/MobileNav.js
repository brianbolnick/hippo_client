import React from "react";
import Logo from "../../img/hippo-text.svg";
import {
	NavMobile, 
	Brand,
	BrandImage,
	StyledIcon,
	MobileNavLinks,
	NavLinkMobile
} from './NavStyles';

class MobileNav extends React.Component {
  state = { showMenu: false };

  handleClick = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <NavMobile>
        <Brand>
          <BrandImage src={Logo} />
        </Brand>
        <StyledIcon
          name="menu"
          style={{ color: "#414141" }}
          onClick={this.handleClick}
        />
        {this.state.showMenu ? (
          <MobileNavLinks>
            <NavLinkMobile to="/">About</NavLinkMobile>
            <NavLinkMobile to="/sign_in">Sign In</NavLinkMobile>
          </MobileNavLinks>
        ) : null}
      </NavMobile>
    );
  }
}

export default MobileNav;
