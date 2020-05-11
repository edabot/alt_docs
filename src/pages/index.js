import React from 'react';
import IndexLinks from '../components/index-links';
import ProductGroups from '../components/product-groups';
import ArticleStubs from '../components/article-stubs';
import SearchBar from '../components/search-bar';
import EdbLogo from '../components/edb-logo';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import {
  indexLinkList,
  linkGroups,
  articles,
} from '../constants/index-link-list';
import styled from '@emotion/styled';
import Layout from '../components/layout';

const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  h2 {
    font-size: 2rem;
  }
`;

const PaddedCol = styled(Col)`
  padding-top: 1.5rem;
`;

const HeadlineWithStrap = ({ headline, strap }) => {
  return (
    <FlexColumn>
      <h2>{headline}</h2>
      <div>{strap}</div>
    </FlexColumn>
  );
};

const navStyles = {
  height: '65px',
};

export default () => {
  return (
    <Layout>
      <Row>
        <PaddedCol style={{ height: '100vh' }} md={2} className="border-right">
          <EdbLogo />
          <IndexLinks indexLinkList={indexLinkList} />
        </PaddedCol>
        <Col className="m-0 p-0">
          <Navbar className="border-bottom fluid" style={navStyles}>
            <SearchBar />
          </Navbar>
          <Container>
            <h1>Welcome To EDB Docs</h1>
            <ProductGroups linkGroups={linkGroups} />
            <HeadlineWithStrap
              headline=" Learn EDB Postgres"
              strap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, asperiores!"
            />
            <ArticleStubs articles={articles} />
          </Container>
        </Col>
      </Row>
    </Layout>
  );
};
