import React from "react";
import Logo from "../../img/hippo-text.svg";
import ReactDOM from "react-dom";
import {
  NavMobile,
  Brand,
  BrandImage,
  StyledIcon,
  MobileNavLinks,
  NavLinkMobile
} from "./NavStyles";

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
      <NavMobile>
        <Brand>
          <BrandImage src={Logo} />
        </Brand>
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
          <NavLinkMobile to="/">Home</NavLinkMobile>
          <NavLinkMobile to="/">About</NavLinkMobile>
          <NavLinkMobile to="/sign_in">Sign In</NavLinkMobile>
        </MobileNavLinks>
      </NavMobile>
    );
  }
}

export default MobileNav;
