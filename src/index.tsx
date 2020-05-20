import { createBrowserHistory } from "history";
import * as React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";
import { Redirect, Route, Router, Switch, useLocation } from "react-router-dom";
import { DesktopApp } from "./app/global/desktop/DesktopApp";
import { SiteContainer } from "./app/global/mobile/SiteContainer";
import { Contact } from "./app/pages/Contact";
import { Education } from "./app/pages/Education";
import { Experience } from "./app/pages/Experience";
import { Skills } from "./app/pages/Skills";
import { useMediaQuery } from "./app/util/useMediaQuery";
import "./index.scss";

const history = createBrowserHistory();

const ScrollOnRouteChange = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		const scrollingWindow = document.getElementById("scrollingWindow");
		if (scrollingWindow) {
			scrollingWindow.scrollTop = 0;
		}
	}, [pathname]);

	return null;
};

const App = () => {
	const [experimental, setExperimental] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 450px)");

	return isDesktop && experimental ? (
		<DesktopApp />
	) : (
		<Router history={history}>
			<ScrollOnRouteChange />
			<SiteContainer>
				{isDesktop && (
					<button
						onClick={() => {
							setExperimental(true);
						}}
						className="button button--stacked"
						style={{ margin: "0.75rem" }}
					>
						Activate the experimental desktop mode
					</button>
				)}
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
