import React from 'react';
import styled from '@emotion/styled';

const TightLogo = styled('h2')`
  font-size: 24px;
  letter-spacing: -1.5px;
  color: #393939;
  font-weight: 700;
`;

const GraySpan = styled('span')`
  color: #8a8a8a;
  font-weight: 500;
`;

const EdbLogo = () => (
  <TightLogo>
    edb<GraySpan>docs</GraySpan>
  </TightLogo>
);

export default EdbLogo;
