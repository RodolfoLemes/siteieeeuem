import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { DimensionProvider } from './context/dimension';

import Archives from './pages/Archives/Archives';
import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Forms from './pages/Forms/Forms';
import User from './pages/User/User';
import Seel from './pages/Seel';
import Subscribe from './pages/Seel/pages/Subscribe';
import Payment from './pages/Seel/pages/Payment';

function Routes() {
	return (
		<DimensionProvider>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true} component={Home} />
					<Route path="/archives" component={Archives} />
					<Route path="/blog" component={Blog} />
					<Route path="/events" component={Events} />
					<Route path="/store" exact={true} component={Store} />
					<Route path="/store/:course" component={Forms} />
					<Route path="/user" component={User} />
					<Route path="/seel" exact={true} component={Seel} />
					<Route path="/seel/subscribe" component={Subscribe} />
					<Route path="/seel/payment" component={Payment} />
				</Switch>
			</BrowserRouter>
		</DimensionProvider>
	);
}

export default Routes;
