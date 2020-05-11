import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import LeftNav from '../components/left-nav';
import PageTableOfContents from '../components/table-of-contents';
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

const LearnDocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { navLinks } = pageContext;
  return (
    <Layout>
      <Row>
        <PaddedCol style={{ height: '100vh' }} md={2} className="border-right">
          <LeftNav
            navLinks={navLinks}
            path={mdx.fields.path}
            withVersions={false}
          />
        </PaddedCol>
        <Col className="m-0 p-0">
          <Navbar className="border-bottom fluid" style={navStyles}>
            <SearchBar />
          </Navbar>
          <Container>
            <h1>{mdx.frontmatter.title}</h1>
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

export default LearnDocTemplate;
