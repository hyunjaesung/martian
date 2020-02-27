import * as React from 'react';
import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyles = createGlobalStyle`
      body {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 20px;
          width: 100vw;
          margin: 20px;
        }
      button {border:0 none; background-color:transparent; cursor:pointer;}
      a {color:#2f3743; text-decoration:none;}
      a:hover,a:focus{color:#333;}
      a:link,a:active,a:visited{color:#7d7d7d; text-decoration:none; border:0px;}
    `;
const RootContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const App: FC = () => {
  return (
    <RootContainer>
      <Router />
      <GlobalStyles />
    </RootContainer>
  );
};

export default App;
