import * as React from 'react';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const bounceUp = keyframes`
    0%{ transform: translate3d(0, 3%, 0);}
    50%{ transform: translate3d(0, -3%, 0);}
    100%{ transform: translate3d(0, 3%, 0);}
  }`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${bounceUp} 2s linear infinite;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 60%;
`;
const MainTitle = styled.h1`
  margin: 0px;
  height: 10.5rem;
  /* width: 100%; */
  font-family: Righteous;
  font-size: 10rem;
  text-align: justify;
  color: white;
  opacity: 0.9;
`;
const SubTitle = styled.h3`
  margin: 0px;
  /* width: 100%; */
  font-family: Squada One;
  font-weight: 1000;
  font-size: 3rem;
  text-align: justify;
  color: white;
  opacity: 0.6;
`;

const SearchBar = styled.input`
  margin-top: 50px;
  width: 30%;
  height: 60px;
  text-align: center;
  font-size: 2rem;
  border-bottom: 3px solid rgba(256, 256, 256, 0.6);
  color: white;
  opacity: 0.9;
  font-family: 'Do Hyeon';
  padding-bottom: 5px;
  &:focus {
    border-bottom: 3px solid #ee680f;
  }
`;

const Home: FC = () => {
  return (
    <HomeContainer>
      <TitleContainer>
        <MainTitle>Martian</MainTitle>
        <SubTitle>Reading Project</SubTitle>
      </TitleContainer>
      <SearchBar />
    </HomeContainer>
  );
};

export default Home;
