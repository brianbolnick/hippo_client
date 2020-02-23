import styled from 'styled-components/macro';
import { media, avenir } from 'styles/css-variables';

export const ButtonContainer = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  margin: 32px auto;
`;

export const ModalText = styled.div`
  font-family: ${avenir};
  font-weight: 600;
  margin-top: 16px;
`;

export const FormContainer = styled.form`
  width: 485px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  ${media.phone` 
	box-sizing: border-box;
	background: #ffffff;
	border-radius: 4px;
	width: 100%;
	padding: 16px;
	`};
`;

export const FormWrapper = styled.div`
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
	width: 100%;
	`};
`;
