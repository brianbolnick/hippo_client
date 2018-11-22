import styled from "styled-components";
import {
  colors,
  media,
  montserrat,
  sourceSans
} from "../../../styles/css-variables";

export const Actions = styled.div`
  margin-top: 16px;
  width: 375px;
  display: flex;
  justify-content: space-evenly;
  ${media.phone`
	`};
`;

export const DemoContainer = styled.div`
  height: 600px;
  width: 60%;
  background: white;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 1px #31363896;
  ${media.phone`
		width: 90%;
    height: 280px;
	`};
`;

export const Curve = styled.div`
  position: relative;
  background-image: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  //background: linear-gradient(to left, #00b4db, #0083b0);
  height: 1000px;
  z-index: -1;
  bottom: 500px;
`;

export const Footer = styled.div`
  height: 400px;
  background: ${colors.lightGray};
  margin-top: 200px;
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
  margin-top: 80px;
  ${media.phone`
	padding: 5% 0;
	`};
`;
export const Title = styled.div`
  font-size: 3rem;
  font-family: ${montserrat};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.1rem;
`;

export const Description = styled.div`
  font-family: ${sourceSans};
  font-size: 1.5rem;
`;

export const SubDescriptionContainer = styled.div`
  position: absolute;
  bottom: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-flow: column;
`;

export const DescriptionTitle = styled.div`
  font-size: 2.5rem;
  font-family: ${montserrat};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.1rem;
  color: ${colors.white};
`;

export const DescriptionText = styled.div`
  font-size: 1.5rem;
  font-family: ${sourceSans};
  color: ${colors.lightGray};
  width: 75%;
  margin-top: 10px;
`;
