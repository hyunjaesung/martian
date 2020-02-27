import * as React from 'react';
import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Anton|Fjalla+One|Righteous&display=swap');
      body {
        display: flex;
        justify-content: center;
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 20px;
          width: 100vw;
          margin: 20px;
          /* background: rgb(220,136,38); */
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(220,123,38,1) 25%, rgba(255,85,0,1) 87%);
        }
      button {border:0 none; background-color:transparent; cursor:pointer;}
      input {background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
}
input:focus {outline:none}
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
