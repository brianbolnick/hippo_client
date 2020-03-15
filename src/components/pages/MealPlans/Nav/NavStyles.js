import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { colors, media, raleway } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';
import Button from 'components/common/Button/Button';
import Anchor from 'components/common/Anchor/Anchor';

export const Navbar = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  font-size: 1rem;
  z-index: 1000;
  transition: 0.2s ease;
  box-shadow: 0 0 0 transparent;
  padding: 0 1%;
  width: 75%;
  box-sizing: border-box;
`;

export const Brand = styled.div``;

export const NavAnchor = styled(Anchor)`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 32px;
  font-weight: 600;
  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
`;

export const NavLinkButton = styled(Button)`
  color: ${colors.black};
  font-size: 1.4rem;
  transition: all 0.2s ease;
  margin: 10px 0;
  text-decoration: none;
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 40px;

  &:hover {
    color: ${colors.red};
    ${({ auth }) => auth && `color: ${colors.white} `};
    transition: all 0.2s ease;
  }
`;

export const NavLink = styled(Link)`
  color: ${colors.black};
  transition: all 0.2s ease;
  text-decoration: none;
  margin-left: 32px;
  font-weight: 600;
  font-size: 40px;
  font-family: ${raleway};

  &:hover {
    color: ${colors.red};
    transition: all 0.1s ease;
  }
`;

export const BrandImage = styled.img`
  height: 32px;
`;

export const StyledIcon = styled(Icon)`
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const SearchWrapper = styled.div`
  width: 32vw;
  margin-right: 32px;
  ${media.phone`
		width: 100%;
	margin-right: 0;
	`}
`;
