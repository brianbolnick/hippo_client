import React from 'react';
import Button from 'components/common/Button';
import Layout from 'components/common/Layout/Layout';
import styled from 'styled-components/macro';
import { avenir, colors } from 'styles/css-variables.js';
import Divider from 'components/common/Divider';

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
const Emphasis = styled.span`
  font-weight: 700;
  color: ${colors.red};
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

export default () => {
  return (
    <Layout>
      <Container>
        <PageTitle>Why Hungry Hippo?</PageTitle>

        <MainDescription>
          Hungry Hippo is an app I created with hopes of{' '}
          <Emphasis> paying down student debt. </Emphasis>
          With a love for cooking and a background in software development, I
          thought there was no better way of contributing to my student loans
          than building something that also fills a need.
        </MainDescription>

        <a
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HUYFMWSSJERU2&source=url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonContainer>Support Me!</ButtonContainer>
        </a>
        <ButtonMeta>
          All initial proceeds (after hosting and maintenance fees) will go
          towards my student loan balance.
        </ButtonMeta>

        <Divider full margin="40px" />
        <Title>More information coming soon!</Title>
      </Container>
    </Layout>
  );
};
