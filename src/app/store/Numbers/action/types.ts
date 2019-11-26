export const SAVE_NUMBER = 'SAVE_NUMBER';
export const OPEN_FIB_MODAL = 'OPEN_FIB_MODAL';
export const CLOSE_FIB_MODAL = 'CLOSE_FIB_MODAL';

export interface Interface {
  [SAVE_NUMBER]: {
    type: 'SAVE_NUMBER',
    payload: {
      number: number,
    },
  },
  [OPEN_FIB_MODAL]: {
    type: 'OPEN_FIB_MODAL',
    payload: {
      number: number,
    },
  },
  [CLOSE_FIB_MODAL]: {
    type: 'CLOSE_FIB_MODAL',
  },
};
