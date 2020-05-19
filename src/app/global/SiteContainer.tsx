import * as React from "react";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";

export const SiteContainer: FunctionComponent = ({ children }) => (
	<div className="outerWindow">
		<div className="innerWindow" id="scrollingWindow">
			<header className="siteHeader">
				<h1 className="siteHeader__h1">Ewan Morrison.</h1>
				<p className="siteHeader__p">Full stack software engineer.</p>
			</header>
			<main className="siteMain">{children}</main>
			<footer className="siteFooter">
				<nav>
					<ul className="footerNav">
						<li className="footerNav__item">
							<NavLink
								activeClassName="footerNav__item__a--active"
								className="footerNav__item__a"
								to="experience"
							>
								<Icon>work</Icon>
							</NavLink>
						</li>
						<li className="footerNav__item">
							<NavLink
								activeClassName="footerNav__item__a--active"
								className="footerNav__item__a"
								to="education"
							>
								<Icon>school</Icon>
							</NavLink>
						</li>
						<li className="footerNav__item">
							<NavLink
								activeClassName="footerNav__item__a--active"
								className="footerNav__item__a"
								to="skills"
							>
								<Icon>brush</Icon>
							</NavLink>
						</li>
						<li className="footerNav__item">
							<NavLink
								activeClassName="footerNav__item__a--active"
								className="footerNav__item__a"
								to="contact"
							>
								<Icon>account_circle</Icon>
							</NavLink>
						</li>
					</ul>
				</nav>
			</footer>
		</div>
	</div>
);
