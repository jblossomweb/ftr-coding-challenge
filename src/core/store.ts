import { fromJS, Map } from 'immutable';
import windowOrGlobal from 'window-or-global';

import {
  createStore,
  applyMiddleware,
  compose,
  Store,
  StoreEnhancer,
  Middleware,
  Reducer,
  Action,
} from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux-immutable';

import config from '../app/config';
import getHistory from './history';

export type StorePath = (...args: any) => string[];
export interface StorePaths {
  [key: string]: StorePath,
};

export interface AppAction extends Action {
  payload?: any,
};

export type AppState = Map<string, any>;
export type AppReducer = Reducer<AppState, AppAction>;

export interface AppReducers {
  [key: string]: AppReducer,
};

export const getInitialState: () => AppState = () => Map(fromJS({
  app: {}
}));

const getEnhancers = () => {
  const enhancers: StoreEnhancer[] = []
  if (config.environment !== 'production' || config.reduxDevToolsInProduction) {
    const devToolsExtension: () => StoreEnhancer = windowOrGlobal.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  return enhancers;
};

const getMiddlewares = () => {
  const middlewares: Middleware[] = [
    thunk,
    routerMiddleware(getHistory()),
  ]
  return middlewares;
};

const middlewares: Middleware[] = getMiddlewares();
const enhancers: StoreEnhancer[] = getEnhancers();

export const combineAllReducers = (
  appReducers: AppReducers,
) => combineReducers({
  router: connectRouter(getHistory()),
  app: ((
    appState: AppState = getInitialState(),
    action: AppAction,
  ): AppState => {
    const reducer: AppReducer = appReducers[action.type]
    return reducer ? reducer(appState, action) : appState
  }) as AppReducer,
});

const composedEnhancers = fromJS(compose(
  applyMiddleware(...middlewares),
  ...enhancers,
));

export const composeStore = (
  initialState: AppState,
  combinedReducer: Reducer,
): Store<AppState> => createStore(
  combinedReducer,
  initialState,
  composedEnhancers,
);
