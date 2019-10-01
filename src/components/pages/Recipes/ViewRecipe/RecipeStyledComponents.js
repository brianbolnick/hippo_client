import styled from "styled-components";
import { colors, media, avenir } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";

export const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0 10%;
  ${media.tablet`
		padding: 0;
	`};
`;
export const ImageContainer = styled.div`
	height: 30rem
	width: 100%;
	border-radius: 16px;
	background-size: cover !important;
	background-position: center !important;
	background-repeat: no-repeat;
	position: relative;
	display: flex;
	flex-flow: column;
	align-items: flex-start;
	justify-content: flex-end;
	padding: 32px;
	box-sizing: border-box;

	${({ url }) =>
    `
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.01),
			rgba(0, 0, 0, 0.4)
		),
		url(${url});
	`};
`;

export const Title = styled.div`
  font-size: 3rem;
  letter-spacing: 1px;
  color: ${colors.white};
  font-family: ${avenir};
  font-weight: 600;
`;

export const FamilyName = styled.div`
  color: ${colors.white};
  font-family: ${avenir};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
`;

export const MetaData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  ${media.tablet`
		order: 1;
		flex: 2;
	`};
`;

export const CategoryMeta = styled.div`
  margin: 32px 0;
`;

export const Category = styled.div`
  font-family: ${avenir};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.black};
`;

export const DishType = styled.div`
  font-family: ${avenir};
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.darkGray};
`;

export const ActionIcon = styled(Icon)`
  cursor: pointer;

  &:hover {
    path {
      fill: ${colors.darkGray};
    }
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  order: 3;
  width: 130px;
  ${media.tablet`
		order: 1;
		flex: 1;
	`};
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
  text-align: center;
  order: 2;

  ${media.tablet`
		order: 3;
		padding: 0;
		flex: 100%;
		margin-bottom: 32px;
	`};
`;
export const TimeGroup = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

export const Time = styled.div`
  font-family: ${avenir};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${colors.black};
`;
export const TimeLabel = styled.div`
  font-family: ${avenir};
  font-size: 1rem;
  font-weight: 400;
  color: ${colors.darkGray};
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  //margin: 8px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.red};
  font-family: ${avenir};
`;

export const Notes = styled.div``;

export const NotesContainer = styled.div`
  margin-bottom: 32px;
`;

export const IngredientsContainer = styled.div`
  margin-bottom: 32px;
`;

export const IngredientsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 18px;
`;
export const Ingredient = styled.li`
  width: 50%;
  margin-bottom: 12px;
  font-family: ${avenir};
`;
export const ServingsLabel = styled.div`
  font-family: ${avenir};
  font-size: 1rem;
  font-weight: 500;
`;
export const ServingsContainer = styled.div`
	margin 8px 0;
	margin-bottom: 16px;
`;

export const Quantity = styled.span`
  font-weight: 600;
`;

export const TempStep = styled.div`
  margin: 24px 0;
  letter-spacing: 1px;
  padding: 16px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  //border: solid 2px ${colors.red};
  border-radius: 2px;
  span {
    font-weight: 600;
    margin-right: 16px;
    color: #fe4969;
  }
`;

export const Step = styled.div`
  margin-bottom: 34px;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: ${avenir};
  font-weight: 500;
  span {
    font-weight: 500;
    color: ${colors.offGray};
    font-size: 1.1rem;
    margin-bottom: 16px;
    font-family: ${avenir};
  }
`;
export const StepsContainer = styled.div``;
export const ServingsActionsGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const ServingsIcon = styled(Icon)`
  cursor: pointer;
`;
