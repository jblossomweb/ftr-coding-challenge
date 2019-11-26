import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Template from 'app/components/templates/LightCentered';
import ExternalLink from 'app/components/atoms/ExternalLink';
import logo from 'app/images/ftr-logo.png';
import * as Style from './style';

const Page: React.FC = () => (
  <Template>
    <Style.Wrapper>
      <ExternalLink href={`https://www.fortherecord.com`}>
        <img src={logo} alt={`For the Record`} />
      </ExternalLink>
      <h4>Platform Developer Coding Test</h4>
      <p>
        <Link to={`/web`}>
          <Button primary>
            Web UI
          </Button>
        </Link>
      </p>
    </Style.Wrapper>
  </Template>
);

export default Page;
