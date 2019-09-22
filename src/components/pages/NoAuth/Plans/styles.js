import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors, avenir, media } from "styles/css-variables";

export const PlanSection = styled.div`
  text-align: center;
  font-family: ${avenir};
  color: ${colors.black};
  font-size: 1.5rem;
  width: 60%;
  margin: 0 auto;

  ${media.phone`
		width: 90%;
	`}
`;

export const PlanTitle = styled.div`
  font-weight: 700;
`;
export const PlanDetails = styled.div``;
export const PlanPrice = styled.div``;
export const PlanItem = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.smallDesktop`
		flex-flow: column;
	`};
`;

export const SubTitle = styled.div`
  font-size: 3rem;
  margin: 24px auto;
  font-weight: 600;
`;

export const PlanDescription = styled.div`
  margin-bottom: 32px;
`;

export const AboutLink = styled(Link)`
  font-weight: 700;
  color: ${colors.red};
`;

export const CardWrapper = styled.div`
  flex: 1;
  border-radius: 2px;
  box-shadow: 0px 1px 4px 0px #31363830;
  padding: 32px;
  margin: 16px;

  ${media.smallDesktop`
		width: 80%;
	`};
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const PlanImage = styled.img``;

export const Price = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  color: ${colors.red};
`;

export const Divider = styled.hr`
  border-style: none;
  border-top: solid 2px ${colors.offWhite};
`;

export const Inclusions = styled.div``;
export const Item = styled.div`
  margin: 4px;
  font-size: 20px;
  ${({ off }) =>
    off &&
    `
		color: ${colors.mutedGray};
		text-decoration: line-through;
	`};
`;

export const DollarSign = styled.sup`
  font-size: 14px;
`;
export const Month = styled.span`
  font-size: 12px;
`;
