import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const List = styled('ul')`
  padding: 0;
  list-style: none;
`;

const SectionName = styled('div')`
  font-weight: 700;
`;

const IndexLinks = ({ indexLinkList }) => (
  <>
    {indexLinkList.map(section => {
      return (
        <div key={section.sectionName}>
          <SectionName>{section.sectionName}</SectionName>
          <List>
            {section.links.map(link => {
              return (
                <li key={link.title}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              );
            })}
          </List>
        </div>
      );
    })}
  </>
);

export default IndexLinks;
