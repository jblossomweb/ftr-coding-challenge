import { AppReducers, AppState, getInitialState } from 'core/store';
import paths from '../paths';
import * as types from './types';

/*
 * SAVE_NUMBER
 */
export const saveNumber = (
  state: AppState = getInitialState(),
  action: types.Interface['SAVE_NUMBER'],
) => {
  const { number } = action.payload;

  const frequency: number = state
    .getIn(paths.frequency(number), 0);

  return state
    .setIn(paths.frequency(number), frequency + 1);
};

/*
 * OPEN_FIB_MODAL
 */
export const openFibModal = (
  state: AppState = getInitialState(),
  action: types.Interface['OPEN_FIB_MODAL'],
) => {
  const { number } = action.payload;

  return state
    .setIn(paths.fibModal(), number);
};

/*
 * CLOSE_FIB_MODAL
 */
export const closeFibModal = (
  state: AppState = getInitialState(),
  _action: types.Interface['CLOSE_FIB_MODAL'],
) => state
  .setIn(paths.fibModal(), undefined);

/*
 * default export
 */
export default {
  [types.SAVE_NUMBER]: saveNumber,
  [types.CLOSE_FIB_MODAL]: closeFibModal,
  [types.OPEN_FIB_MODAL]: openFibModal,
} as AppReducers;
