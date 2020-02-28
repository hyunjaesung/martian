import * as React from 'react';
import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const bounceUp = keyframes`
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
  color: white;
  opacity: 0.9;
  font-family: 'Do Hyeon';
  padding-bottom: 5px;
  background-color: transparent;
  background-image: linear-gradient(to right, white 0, #ff7101 70%);
  background-repeat: no-repeat;
  background-position: 0 calc(100% + 3px), 0 0;
  background-size: 100% 3px;
  box-shadow: none;
  border: 0;
  border-bottom: 3px solid rgba(256, 256, 256, 0.6);
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  outline: 0 none;
  transition: border-color 0.2s linear;
  &:focus,
  &:hover {
    border-color: transparent;
  }
`;

const JourneyLink = styled.div`
  margin-top: 20px;
  font-family: 'Do Hyeon';
  color: white;
  opacity: 0.7;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 0.9;
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
      <Link to="/journey">
        <JourneyLink>Start Your Journey</JourneyLink>
      </Link>
    </HomeContainer>
  );
};

export default Home;
