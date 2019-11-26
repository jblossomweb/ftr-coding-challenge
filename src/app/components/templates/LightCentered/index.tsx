import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import * as Style from './style';

const LightCentered: React.FC = ({ children }) => (
  <Style.Wrapper>
    <Style.Header>
      {children}
    </Style.Header>
  </Style.Wrapper>
);

export default LightCentered;
