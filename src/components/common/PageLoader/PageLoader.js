import React from 'react';
import styled from 'styled-components/macro';
import Loader from 'img/burger.gif';

const LoadContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const PageLoader = () => {
  return (
    <LoadContainer>
      <img alt="" src={Loader} style={{ height: '300px', width: '300px' }} />
    </LoadContainer>
  );
};

export default PageLoader;
