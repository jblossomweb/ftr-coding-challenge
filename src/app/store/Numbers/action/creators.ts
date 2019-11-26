import * as types from './types';

/*
 * SAVE_NUMBER
 */
export const saveNumber: (
  number: number,
) => types.Interface['SAVE_NUMBER'] = number => ({
  type: types.SAVE_NUMBER,
  payload: {
    number,
  },
});

/*
 * OPEN_FIB_MODAL
 */
export const openFibModal: (
  number: number,
) => types.Interface['OPEN_FIB_MODAL'] = number => ({
  type: types.OPEN_FIB_MODAL,
  payload: {
    number,
  },
});

/*
 * CLOSE_FIB_MODAL
 */
export const closeFibModal: (
) => types.Interface['CLOSE_FIB_MODAL'] = () => ({
  type: types.CLOSE_FIB_MODAL,
});
