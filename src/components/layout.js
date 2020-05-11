import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import useSiteMetadata from '../hooks/use-sitemetadata';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          /* * + * {
            margin-top: 1rem;
          } */

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 14px;
            line-height: 1.4;
            scroll-behavior: smooth;
            background-color: #f9fafc;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
            .active {
              color: #00adf2;
              font-weight: 700;
              text-decoration: underline;
            }
          }
          a {
            color: #00adf2;
          }

          .toctree {
            display: none;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <script src="https://kit.fontawesome.com/8b48506750.js" crossorigin="anonymous"></script>
      </Helmet>
      <main
        css={css`
          margin: 0 auto;
          width: 100%;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
