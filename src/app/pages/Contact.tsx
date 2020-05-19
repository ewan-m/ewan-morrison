import * as React from "react";
import "./Page.scss";
import { Icon } from "../global/Icon";

export const Contact = () => {
	return (
		<div className="pageContainer">
			<h2 className="pageTitle">Contact</h2>
			<p>Feel free to get in touch with me!</p>

			<a
				className="button button__primary button--large"
				style={{ margin: "0.375rem" }}
				href="https://www.linkedin.com/in/ewan-morrison/"
			>
				<Icon>link</Icon>&nbsp;LinkedIn
			</a>
			<a
				className="button button__primary button--large"
				style={{ margin: "0.375rem" }}
				href="https://github.com/ewan-m"
			>
				<Icon>code</Icon>&nbsp;Github
			</a>
			<a
				className="button button__primary button--large"
				style={{ margin: "0.375rem" }}
				href="mailto:contact@ewanmorrison.co.uk"
			>
				<Icon>mail</Icon>&nbsp;Email
			</a>
		</div>
	);
};
