import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import LeftNav from '../components/left-nav';
import PageTableOfContents from '../components/table-of-contents';
import VersionDropdown from '../components/version-dropdown';
import styled from '@emotion/styled';
import SearchBar from '../components/search-bar';

export const query = graphql`
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      frontmatter {
        title
      }
      fields {
        path
      }
      body
      tableOfContents
    }
  }
`;

const PaddedCol = styled(Col)`
  padding-top: 1.5rem;
`;

const navStyles = {
  height: '65px',
};

const getProductUrlBase = path => {
  return path
    .split('/')
    .slice(0, 2)
    .join('/');
};

const makeVersionArray = (versions, path) => {
  return versions.map(version => ({
    version: version,
    url: `${getProductUrlBase(path)}/${version}`,
  }));
};

const DocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { navLinks, versions } = pageContext;
  const versionArray = makeVersionArray(versions, mdx.fields.path);
  return (
    <Layout>
      <Row>
        <PaddedCol style={{ height: '100vh' }} md={2} className="border-right">
          <LeftNav
            navLinks={navLinks}
            path={mdx.fields.path}
            withVersions={true}
          />
        </PaddedCol>
        <Col className="m-0 p-0">
          <Navbar className="border-bottom fluid" style={navStyles}>
            <SearchBar />
          </Navbar>
          <Container>
            <h1>{mdx.frontmatter.title}</h1>
            {versionArray.length > 1 && (
              <VersionDropdown
                versionArray={versionArray}
                path={mdx.fields.path}
              />
            )}
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Container>
          <Col md={2}>
            {mdx.tableOfContents.items && (
              <PageTableOfContents toc={mdx.tableOfContents.items} />
            )}
          </Col>
        </Col>
      </Row>
    </Layout>
  );
};

export default DocTemplate;
