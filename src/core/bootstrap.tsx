import React from 'react';
import ReactDOM from 'react-dom';
import root from 'window-or-global';

import * as serviceWorker from 'core/serviceWorker';
import config from 'core/config';
import 'core/reset.css';

export default (
  App: React.FC,
  registerServiceWorker: boolean = false,
) => {
  root.console.log(config.packageName + ' version ' + config.packageVersion);
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker ? serviceWorker.register() : serviceWorker.unregister();
}
