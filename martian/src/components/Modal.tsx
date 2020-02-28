import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import * as MarsImage from '../../public/mars.png';

const Container = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  backdrop-filter: url(filters.svg#filter) blur(10px) saturate(150%);
  /* filter: blur(10px); */
  /* opacity: 0.3; */
  z-index: 1;
  margin: 0;
`;
const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 400px;
  height: 700px;
  margin: 0px;
  padding: 30px;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
interface ITest {
  background: string;
}

const Rotate = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`;

const LogoImg = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  z-index: 30;
  background-image: url(${(props: ITest) => props.background});
  background-size: contain;
  animation: ${Rotate} 180s linear infinite;
`;

const Modal = () => (
  <Container>
    <Content>
      <LogoImg background={MarsImage.default} />
    </Content>
  </Container>
);

export default Modal;
