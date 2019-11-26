import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { menu } from 'app/routes';
import logo from 'app/images/ftr-logo.png';
import * as Style from './style';

export interface Props {
  currentRoute: string,
};

const LightCentered: React.FC<Props> = ({ children, currentRoute }) => (
  <Style.Wrapper>
    <Style.Header>
      <Menu fixed={`top`}>
        <Container>
          <Menu.Item as={Link} to={`/home`}>
            <img
              src={logo}
              alt={`For the Record`}
            />
          </Menu.Item>
          {menu.map(route => (
            <Menu.Item
              as={Link}
              to={route.path}
              key={route.path}
              active={currentRoute === route.path}
            >
              {route.title}
            </Menu.Item>
          ))}
        </Container>
      </Menu>
    </Style.Header>
    <Style.Content>
      <Container>
        {children}
      </Container>
    </Style.Content>
  </Style.Wrapper>
);

export default LightCentered;
