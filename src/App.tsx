import * as React from 'react';
import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

const GlobalStyles = createGlobalStyle`
      body {
          font-family: 'Noto Sans KR', sans-serif;
          font-size: 20px;
          width: 100vw;
          padding: 20px;
          margin: 20px;
        }
    `;

const App: FC = () => {
  return (
    <div>
      <Router />
      <GlobalStyles />
    </div>
  );
};

export default App;
