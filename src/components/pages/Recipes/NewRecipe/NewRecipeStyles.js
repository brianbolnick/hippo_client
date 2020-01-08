import styled from 'styled-components/macro';
import { colors, avenir, media } from 'styles/css-variables';
import Icon from 'components/common/Icon/Icon';
import Button from 'components/common/Button';
import Input from './Input';

export const Quantity = styled.span`
  font-weight: 600;
`;

export const ActionIcon = styled(Icon)`
  height: 16px;
  width: 16px;
  min-width: 16px;
  min-height: 16px;
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    path {
      fill: ${colors.red};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
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

export const AddIngredientContainer = styled.div`
  display: flex;
  flex-flow: row;
`;
export const AddIngredientLabel = styled.label`
  font-family: ${avenir};
  margin-bottom: 16px;
`;

export const StyledInput = styled(Input)`
  width: 100%;
  & input {
    width: 100%;
  }
`;
