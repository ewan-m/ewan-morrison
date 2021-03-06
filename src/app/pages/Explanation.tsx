import * as React from "react";
import { Icon } from "../global/Icon";
import CV from "../../assets/CV/EwanMorrisonCV.pdf";

export const Explanation = () => (
	<>
		<div className="pageContainer">
			<h2 className="pageTitle">Hi there!</h2>
			<p>
				Welcome to my (Ewan Morrison's) online CV website. Use the start menu up top
				to read different sections of my CV.
			</p>
			<p>
				As a bit of fun I've tried to make the desktop site look like a desktop OS
				and the mobile site look like a physical phone. Try moving the windows about
				and resizing them!
			</p>
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
			<a
				download
				className="button button__primary button--large"
				href={CV}
				style={{ margin: "0.375rem" }}
			>
				<Icon>cloud_download</Icon>&nbsp;Download my CV
			</a>
			<p>
				Full disclaimer: I made this in a few hours and I've only tested in Chrome
				and Firefox. There may be bugs!
			</p>
		</div>
	</>
);
