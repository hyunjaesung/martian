import * as React from 'react';
import styled from 'styled-components';
import { FC } from 'react';
import SideButton from './SideButtonComponent';

const Container = styled.div`
  width: auto;
  height: 140px;
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => (
  <Container>
    <div />
    <SideButton />
  </Container>
);

export default Header;
