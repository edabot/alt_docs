import React from 'react';
import styled from '@emotion/styled';

const FixedCol = styled('div')`
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-top: 1.5rem;
`;

const AnchorLink = styled('a')`
  text-decoration: none !important;
  color: #999;
  font-size: 0.875rem;

  && :hover {
    color: black;
  }
`;

const PageTableOfContents = ({ toc }) => (
  <FixedCol>
    {toc.map(item => (
      <div key={item.title}>
        <AnchorLink href={item.url}>{item.title}</AnchorLink>
      </div>
    ))}
  </FixedCol>
);

export default PageTableOfContents;
