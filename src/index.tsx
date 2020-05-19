import { createBrowserHistory } from "history";
import * as React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { Redirect, Route, Router, Switch, useLocation } from "react-router-dom";
import { SiteContainer } from "./app/global/SiteContainer";
import { Contact } from "./app/pages/Contact";
import { Education } from "./app/pages/Education";
import { Experience } from "./app/pages/Experience";
import { Skills } from "./app/pages/Skills";
import "./index.scss";

const history = createBrowserHistory();

const ScrollOnRouteChange = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		document.getElementById("scrollingWindow")?.scrollTo({ top: 0 });
	}, [pathname]);

	return null;
};

const App = () => {
	return (
		<Router history={history}>
			<ScrollOnRouteChange />
			<SiteContainer>
				<Switch>
					<Route path="/experience" exact component={Experience} />
					<Route path="/education" exact component={Education} />
					<Route path="/skills" exact component={Skills} />
					<Route path="/contact" exact component={Contact} />
					<Redirect from="/" to="/experience" />
				</Switch>
			</SiteContainer>
		</Router>
	);
};

render(<App />, document.getElementById("root"));
