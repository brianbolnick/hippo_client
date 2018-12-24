import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, rufina, media, varela } from "styles/css-variables";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";

export const InfoBoxComponent = () => (
  <InfoBox>
    <Icon
      name="utensils"
      color={colors.black}
      style={{ width: "80px", height: "80px" }}
    />
    <InfoTitle> Your Recipes Are Just Clicks Away.</InfoTitle>
    <InfoDescription>
      Hungry Hippo makes it easy to create, keep, and share your family recipes
    </InfoDescription>
    <InfoLink to="/about">
      <Button>Learn More</Button>
    </InfoLink>
  </InfoBox>
);

export const InfoTitle = styled.div`
  font-size: 2.5rem;
  font-family: ${rufina};
  letter-spacing: -0.05rem;
  margin-top: 24px;
  text-align: center;
`;

export const InfoDescription = styled.div`
  font-family: ${varela};
  margin-top: 24px;
  font-size: 1.1rem;
  text-align: center;
`;

export const InfoLink = styled(Link)`
  margin-top: 80px;
`;

export const InfoBox = styled.div`
  height: 600px;
  width: 400px;
  background: white;
  z-index: 9;
  box-shadow: 0 0 18px 2px #21212173, 0 0 20px 10px #2121211f;
  border-radius: 4px;
  min-width: 375px;
  margin-left: 40px;
  display: flex;
  padding: 48px 25px;
  box-sizing: border-box;
  align-items: center;
  flex-flow: column;
  ${media.phone`
	display: none;
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

export const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.phone`
	justify-content: center;
	`};
`;

export const FadedBlock = styled.div`
  width: 1000px;
  height: 800px;
  position: absolute;
  top: 45px;
  left: 60%;
  transform: rotate(45deg);
  background-image: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  border-radius: 64px;
  opacity: 0.7;
  z-index: -2;
`;

export const Block = styled.div`
  width: 1500px;
  height: 1100px;
  position: absolute;
  top: 145px;
  left: 60%;
  transform: rotate(45deg);
  background-image: linear-gradient(to top left, #d44b92, #f0617d, #f3874a);
  border-radius: 64px;
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
	box-shadow: 0 0 12px 3px #21212170;
	padding: 16px;
	`};
`;

export const PageWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 10%;
  box-sizing: border-box;

  ${media.phone`
	padding: 5%;
	`};
`;
