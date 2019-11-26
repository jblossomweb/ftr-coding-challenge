import { connect } from 'react-redux';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { AppState } from 'core/store';

import * as routeSelectors from 'app/store/Router/selectors';
import Template from './Template';

export const mapStateToProps = (
  state: AppState,
) => ({
  currentRoute: routeSelectors.getPathName(state),
});

export default connect(
  mapStateToProps,
)(withImmutablePropsToJS(
  Template,
));
