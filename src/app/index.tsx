import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getInitialState, composeStore } from 'core/store';
import getHistory from 'core/history';

import rootReducer from 'app/store/rootReducer';
import { routes, redirects } from './routes';

const store = composeStore(getInitialState(), rootReducer);

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={getHistory()}>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact={true}
            path={route.path}
            component={route.page}
          />
        ))}
        {redirects.map((
          redirect,
          key,
        ) => (
          <Redirect
            key={key}
            exact={true}
            from={redirect.from || undefined}
            to={redirect.to}
          />
        ))}
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
