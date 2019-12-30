import React from "react";
import { Link } from "react-router-dom";
import Button from "components/common/Button";
import Layout from "components/common/Layout/Layout";
import styled from "styled-components";
import { avenir, colors } from "styles/css-variables.js";
import Divider from "components/common/Divider";

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  font-family: ${avenir};
  color: ${colors.black};
`;
const PageTitle = styled.div`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 24px;
`;
const MainDescription = styled.div`
  font-size: 1.5rem;
`;
const ButtonContainer = styled(Button)`
  margin: 40px auto;
  margin-bottom: 16px;
`;

const ButtonMeta = styled.div`
  color: ${colors.darkGray};
`;

const Title = styled.div`
  font-size: 3rem;
  margin: 24px auto;
  font-weight: 600;
`;

const FeatureContainer = styled.div`
  border-radius: 2px;
  box-shadow: 0px 1px 4px 0px #31363830;
  padding: 32px;
  margin: 16px;
`;
const FeatureItem = styled.div`
  font-size: 20px;
`;

export default () => {
  return (
    <Layout>
      <Container>
        <PageTitle>This is a Premium Feature</PageTitle>

        <MainDescription>
          You're missing out! Hungry Hippo has much more to offer you as a
          premium subscriber.
        </MainDescription>
        <Divider full margin="40px" />
        <FeatureContainer>
          <Title>Get More With Premium</Title>
          <FeatureItem>Unlimited Recipes</FeatureItem>
          <FeatureItem>Unlimited Family Members</FeatureItem>
          <FeatureItem>Meal Plans</FeatureItem>
          <FeatureItem>Grocery and Shopping Lists</FeatureItem>
          <FeatureItem>Search for Recipes By Ingredient</FeatureItem>
          <FeatureItem>Import Recipes from Other Sites</FeatureItem>
          <FeatureItem>
            Automatic Nutrition Facts (also searchable!)
          </FeatureItem>
          <FeatureItem>And More To Come!</FeatureItem>
        </FeatureContainer>

        <Link to="/subscribe">
          <ButtonContainer>Join Now!</ButtonContainer>
        </Link>
        <ButtonMeta>
          All initial proceeds (after hosting and maintenance fees) will go
          towards my student loan balance.
        </ButtonMeta>
      </Container>
    </Layout>
  );
};
