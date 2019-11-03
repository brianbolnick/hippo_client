import styled from "styled-components";
import { colors, avenir, media, raleway } from "styles/css-variables";
import Icon from "components/common/Icon/Icon";
import Button from "components/common/Button";

export const Quantity = styled.span`
  font-weight: 600;
`;

export const DeleteIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ clear }) => (clear ? "" : colors.softRed)};
    path {
      fill: ${({ clear }) => (!clear ? "" : colors.red)};
    }
    border-radius: 50%;
  }
`;

export const Notice = styled.div`
  text-align: center;
  width: 100%;
  color: ${colors.offGray};
`;

export const Title = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin: 32px 0;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.black};
  font-family: ${avenir};
`;

export const StepContainer = styled.div`
  ${({ active }) =>
    !active &&
    `
		display: none;
	`};
`;

export const Columns = styled.div`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  ${media.smallDesktop`
		flex-flow: column;
	`}
`;

export const Column = styled.div`
  ${({ flex }) =>
    flex &&
    `
		flex: ${flex};
	`};

  &:not(:last-child) {
    margin-right: 48px;
  }
`;

export const StepOptions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ActionButton = styled(Button)`
  margin-left: 16px;
`;

export const PageContainer = styled.div`
  padding: 0 12%;

  ${media.smallDesktop`
		padding: 0;
	`}
`;

export const Ingredient = styled.div`
  width: 100%;
  margin-bottom: 12px;
  font-family: ${avenir};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  box-sizing: border-box;
  &:hover {
    padding-bottom: 1px;
    border-bottom: solid 1px ${colors.mutedGray};
  }
`;

export const Step = styled.div`
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  border-radius: 2px;
  font-family: ${avenir};
  font-weight: 500;
  flex-flow: row;
  span {
    font-weight: 500;
    color: ${colors.black};
    font-size: 2rem;
    margin-bottom: 16px;
    font-family: ${raleway};
    margin-right: 24px;
  }
`;

export const DirectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  transition: 0.1s;
  margin-bottom: 32px;
  &:hover {
    border-radius: 8px;
    box-shadow: 0 15px 5px -11px rgba(0, 0, 0, 0.26),
      0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
`;
