import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { AppState } from 'core/store';
import getFibs from 'app/utils/fibonacci';
import * as numberActions from 'app/store/Numbers/action/creators';
import * as numberSelectors from 'app/store/Numbers/selectors';
import Page, { Props } from './Page';

// does not change with state. do this outside mapStateToProps
const fibSequence: Props['fibSequence'] = getFibs(1000);

export const mapStateToProps = (
  state: AppState,
) => ({
  chartData: numberSelectors.getFrequencyChartData(state).toArray(),
  fibModal: numberSelectors.getFibModal(state),
  fibSequence,
});

export const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
) => ({
  saveNumber: (n: number) => dispatch(
    numberActions.saveNumber(n),
  ),
  openModal: (n: number) => dispatch(
    numberActions.openFibModal(n),
  ),
  closeModal: () => dispatch(
    numberActions.closeFibModal(),
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  withImmutablePropsToJS(Page),
);
