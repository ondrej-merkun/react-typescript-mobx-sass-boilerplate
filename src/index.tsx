import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Switch } from 'react-router-dom';

import App from './App';

ReactDOM.render(
	<Router>
		<Switch>
			<App />
		</Switch>
	</Router>,
	document.getElementById('root')
);
