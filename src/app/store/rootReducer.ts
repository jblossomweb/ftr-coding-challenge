import extend from 'lodash/extend';
import { AppReducers, combineAllReducers } from 'core/store';

// import your reducers here.
import numbersReducers from './Numbers/action/reducers';

const appReducers: AppReducers = extend({},
  // register your reducers here.
  numbersReducers,
);

export default combineAllReducers(appReducers);
