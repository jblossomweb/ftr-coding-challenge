import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Template from 'app/components/templates/LightCentered';

const NotFound: React.FC = () => (
  <Template>
    <p>Sorry! That page was not found.</p>
    <p>
      <Link to={`/home`}>
        <Button primary>
          Back to Home
        </Button>
      </Link>
    </p>
  </Template>
);

export default NotFound;
