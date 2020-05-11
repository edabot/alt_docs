import React from 'react';
import styled from '@emotion/styled';
import { Col } from 'react-bootstrap';

const Content = styled(Col)`
  background-color: white;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  z-index: 2;
`;

const ContentCol = ({ children }) => {
  return <Content>{children}</Content>;
};

export default ContentCol;
