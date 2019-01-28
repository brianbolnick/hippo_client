import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  font-size: 36px;
  font-weight: 800;
`;
const Sub = styled.div`
  font-size: 24px;
  margin-top: 16px;
  text-align: center;
  font-weight: 500;
`;
const StyledLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  color: black;
  margin-top: 16px;
`;
export default () => {
  return (
    <Container>
      UNAUTHORIZED
      <Sub>
        You do not have access to view this page. Either your session expired,
        or you are trying to view something you are not authorized to see.
      </Sub>
      <StyledLink to="/">Return Home</StyledLink>
    </Container>
  );
};
