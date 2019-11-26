import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { AppState } from 'core/store';

// import * as storeActions from 'app/store/<store>/action/creators';
// import * as storeSelectors from 'app/store/<store>/selectors';
import Page from './Page';

export const mapStateToProps = (
  state: AppState,
) => ({
  // fetching: storeSelectors.getFetching(state),
});

export const mapDispatchToProps = (
  dispatch: Dispatch<AnyAction>,
) => ({
  // shorten: (longUrl: string) => dispatch(
  //   storeActions.requestShorten(longUrl)
  // ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withImmutablePropsToJS(
  Page,
));
