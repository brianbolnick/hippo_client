import styled from 'styled-components/macro';
import { colors } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';

export const Drawer = styled.div`
  padding: 16px;
  width: 25%;
  background: white;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  box-sizing: border-box;
  border-radius: 2px;
  background: #fdfdfb;
  border-left: solid 1px #f4f4f4;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1.5em;
`;

export const Date = styled.div`
  color: ${colors.darkGray};
  margin-bottom: 48px;
`;

export const DishTypeContainer = styled.div`
  border-bottom: solid 2px #f4f4f4;
  padding: 16px 0;
`;

export const DishType = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  color: ${colors.darkGray};
`;

export const RecipeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const RecipeImage = styled.div`
  height: 50px;
  min-width: 75px;
  margin-right: 16px;
  background-image: ${({ url }) => `
		linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.01),
			rgba(0, 0, 0, 0.3)
		),
		url(${url});
	`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

export const RecipeData = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

export const RecipeTitle = styled.div``;

export const RecipeType = styled.div`
  font-size: 12px;
  color: ${colors.darkGray};
  text-transform: capitalize;
`;

export const StyledIcon = styled(Icon)`
  margin-left: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(25% - 32px);
  position: fixed;
  background: white;
  bottom: 0;
  padding-top: 16px;
  border-top: solid 1px #f4f4f4;
`;

export const Content = styled.div`
  margin-bottom: 74px;
`;
