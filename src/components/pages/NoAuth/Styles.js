import styled from "styled-components";
import { media, tienne, sourceSans } from "../../../styles/css-variables";

export const Curve = styled.div`
  position: relative;
  background-image: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  height: 1000px;
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
`;

export const Hero = styled.div`
  background: linear-gradient(to bottom, #f5f6f7 0%, #f5f6f7 100%, #fff 50%);
  padding-bottom: 100px;
`;

export const Header = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0 25%;
  text-align: center;
  ${media.phone`
	padding: 5% 0;
	`};
`;
export const Title = styled.div`
  font-size: 3rem;
  font-family: ${tienne};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: -0.1rem;
`;

export const Description = styled.div`
  font-family: ${sourceSans};
  font-size: 1.5rem;
`;
