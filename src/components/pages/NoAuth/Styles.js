import styled from "styled-components";
import { colors, media, varela, rufina } from "styles/css-variables";
import DemoPic from "img/demo-pic.png";

export const Actions = styled.div`
  margin-top: 16px;
  width: 375px;
  display: flex;
  justify-content: space-evenly;
  ${media.phone`
	`};
`;

export const DemoContainer = styled.div`
  height: 550px;
  width: 60%;
  background: white;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 1px #31363896;
  background: url(${DemoPic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${media.phone`
	width: 96%;
	height: 280px;
	background-position: initial;
	`};
`;

export const Curve = styled.div`
  position: relative;
  background-image: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  //background: linear-gradient(to left, #00b4db, #0083b0);
  height: 775px;
  z-index: -1;
  bottom: 500px;

  ${media.phone`
	bottom: 255px;
	`};
`;

export const Footer = styled.div`
  background: ${colors.lightGray};
  height: 200px;
  margin-top: 200px;
  padding: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  a {
    color: ${colors.black};
    font-size: 1.7rem;
    transition: all 0.2s ease;
    margin: 10px 0;
    text-decoration: none;
    width: 100%;
    text-align: center;
    font-weight: 600;
    &:hover {
      color: ${colors.red};
      transition: all 0.2s ease;
    }
  }
`;

export const Block = styled.div`
  width: 1500px;
  height: 1500px;
  position: absolute;
  transform: rotate(45deg);

  ${({ left }) =>
    left
      ? `
	right: 70%;
	background-image: linear-gradient(to top left, #D44B92, #F0617D, #F3874A);	
	`
      : `
	left: 69%;
	background-image: linear-gradient(to bottom right, #438ee1, #973999);

	`};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  color: ${colors.black};
`;

export const Hero = styled.div`
  //background: linear-gradient(to bottom, #f5f6f7 0%, #f5f6f7 100%, #fff 50%);
  padding-bottom: 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 25%;
  text-align: center;
  margin-top: 140px;
  ${media.phone`
	padding: 5% 16px;
	`};
`;
export const Title = styled.div`
  font-size: 3.5rem;
  font-family: ${rufina};
  letter-spacing: -0.05rem;
`;

export const Description = styled.div`
  font-family: ${varela};
  margin-top: 10px;
  font-size: 1.3rem;
`;

export const SubDescriptionContainer = styled.div`
  position: absolute;
  bottom: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-flow: column;

  text-align: center;
  ${media.phone`
	bottom: 35%;
	`};
`;

export const DescriptionTitle = styled.div`
  font-size: 2.5rem;
  font-family: ${rufina};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.1rem;
  color: ${colors.white};
`;

export const DescriptionText = styled.div`
  font-size: 1.5rem;
  font-family: ${varela};
  color: ${colors.lightGray};
  width: 75%;
  margin-top: 10px;
`;
