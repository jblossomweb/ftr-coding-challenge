import { createSelector } from 'reselect';
import { AppState } from 'core/store';
import { PathName, defaultPathName } from './dataTypes';
import paths from './paths';

/*
 * getPathName
 */

const getPathNameSelector = (
  state: AppState,
): PathName => state.getIn(
  paths.pathName(),
  defaultPathName,
);

export const getPathName = createSelector([
  getPathNameSelector,
], (pathName: PathName) => pathName);
