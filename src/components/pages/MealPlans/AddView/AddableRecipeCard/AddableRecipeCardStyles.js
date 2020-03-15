import styled from 'styled-components/macro';
import { colors, avenir, media } from 'styles/css-variables';

export const SelectedIndicator = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;
  border-radius: 12px;
  border: solid 2px white;
  z-index: 1;

  ${({ isSelected }) =>
    isSelected &&
    `
		background-color: ${colors.black};
	`};
`;

export const ImageContainer = styled.div`
  height: 220px;
  position: relative;
  border: solid 4px white;

  ${({ isSelected }) =>
    isSelected &&
    `
    border: solid 4px ${colors.black};
    border-radius: 12px;
	`};
`;

export const Card = styled.div`
  width: calc(25% - 32px);
  margin: 10px 16px;
  position: relative;
  overflow: hidden;
  color: ${colors.black};
  transition: 0.2s;
  max-height: 340px;
  cursor: pointer;

  ${media.smallDesktop`
		width: calc(25% - 32px);
	`};

  ${media.tablet`
		width: calc(50% - 32px);
	`};

  ${({ isSelected }) =>
    !isSelected &&
    `
  &:hover {
    ${SelectedIndicator} {
      background-color: ${`${colors.black}99`};
    }

    ${ImageContainer} {
      border: solid 4px ${`${colors.black}99`};
      border-radius: 12px;
    }
  }
	`};
`;

export const RecipeImage = styled.div`
  height: 100%;
  width: 100%;
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

export const Title = styled.div`
  font-family: ${avenir};
  font-size: 1.1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
`;

export const MetaData = styled.div`
  color: ${colors.mutedGray};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100%;
  border-top: solid 1px ${colors.lightGray};
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(0, 0, 0, 0.2);
`;

export const DishType = styled.div`
  display: flex;
  align-items: center;
`;

export const DishTypeName = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  color: ${colors.white};
`;

export const Content = styled.div`
  padding: 16px 0px;
  text-align: left;
`;
