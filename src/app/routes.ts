import { RouteProps } from 'react-router-dom';

import Page404 from './components/pages/404';

import Home from './components/pages/Home';
import Web from './components/pages/Web';

export interface Route {
  path: string,
  page: RouteProps['component'],
  title?: string,
};

export interface Redirect {
  from?: string,
  to: string,
};

export const menu: Route[] = [
  {
    path: `/web`,
    page: Web,
    title: 'Web UI',
  },
]

export const routes: Route[] = [
  {
    path: `/home`,
    page: Home,
  },
  ...menu,
  {
    path: `/404`,
    page: Page404,
  },
];

export const redirects: Redirect[] = [
  {
    from: `/`,
    to: `/home`,
  },
  {
    to: `/404`
  },
];

export default routes;
