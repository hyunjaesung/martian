import * as React from 'react';
import styled from 'styled-components';
import * as MarsImage from '../../public/mars.png';

const Container = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);
  /* filter: blur(10px); */
  /* opacity: 0.3; */
  z-index: 1;
  margin: 0;
`;
const Content = styled.div`
  position: relative;
  width: 400px;
  height: 700px;
  margin: 30px;
  padding: 30px;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
const LogoImg = styled.img`
  position: relative;
`;

const Modal = () => (
  <Container>
    <LogoImg src={MarsImage} />
    <Content></Content>
  </Container>
);

export default Modal;
