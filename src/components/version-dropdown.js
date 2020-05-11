import React from 'react';
import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const FloatRightDropdown = styled(Dropdown)`
  float: right;
`;

const LightGrayDropdown = styled(Dropdown.Toggle)`
  background-color: #e8e8e8 !important;
  color: black !important;
  border: none;
`;

const VersionDropdown = ({ versionArray, path }) => {
  return (
    <FloatRightDropdown>
      <LightGrayDropdown id="dropdown-basic">
        Version {path.split('/')[2]}
      </LightGrayDropdown>

      <Dropdown.Menu>
        {versionArray.map(version => (
          <Link to={version.url} key={version.url}>
            <div
              css={css`
                display: block;
              `}
            >
              Version {version.version}
            </div>
          </Link>
        ))}
      </Dropdown.Menu>
    </FloatRightDropdown>
  );
};

export default VersionDropdown;
