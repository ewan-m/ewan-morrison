import * as React from "react";
import { useEffect, useState, FunctionComponent } from "react";
import "./DesktopApp.scss";
import { Icon } from "../Icon";
import { useClickOutsideListener } from "../../util/useClickOutsideListener";
import { Contact } from "../../pages/Contact";
import { Skills } from "../../pages/Skills";
import { Experience } from "../../pages/Experience";
import { Education } from "../../pages/Education";
import { Explanation } from "../../pages/Explanation";
import { DesktopWindow } from "./DesktopWindow";

const CurrentTime = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<strong>{date.toLocaleTimeString()}</strong>&nbsp;&nbsp;
			{date.toLocaleDateString()}
		</>
	);
};

export const DesktopApp = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useClickOutsideListener(["desktopNavPane", "startButton"], () => {
		setIsMenuOpen(false);
	});

	const [activeWindows, setActiveWindows] = useState([
		"Explanation",
	] as string[]);

	const addActiveWindow = (newWindow: string) => {
		setActiveWindows(
			[...activeWindows, newWindow].filter(
				(value, index, self) => self.indexOf(value) === index
			)
		);
	};

	const removeActiveWindow = (window: string) => {
		setActiveWindows(activeWindows.filter((active) => active !== window));
	};

	const getWindow = (window: string) => {
		switch (window) {
			case "Education":
				return <Education />;
			case "Experience":
				return <Experience />;
			case "Skills":
				return <Skills />;
			case "Contact":
				return <Contact />;
			case "Explanation":
				return <Explanation />;

			default:
				return <></>;
		}
	};

	return (
		<div className="desktop">
			<header className="desktop__taskbar">
				<button
					className="desktop__taskbar__start"
					id="startButton"
					onClick={(e) => {
						e.preventDefault();
						setIsMenuOpen(!isMenuOpen);
					}}
				>
					<Icon>apps</Icon>&nbsp;Start
				</button>
				<time className="desktop__taskbar__time">
					<CurrentTime />
				</time>
			</header>
			<main className="desktop__main">
				{isMenuOpen && (
					<nav id="desktopNavPane" style={{ display: "inline-block" }}>
						<ul className="desktop__main__menu">
							<li>
								<button
									className="desktop__main__menu__item"
									onClick={() => {
										addActiveWindow("Experience");
									}}
								>
									<Icon>work</Icon>&nbsp;&nbsp;Experience
								</button>
							</li>
							<li>
								<button
									className="desktop__main__menu__item"
									onClick={() => {
										addActiveWindow("Education");
									}}
								>
									<Icon>school</Icon>&nbsp;&nbsp;Education
								</button>
							</li>
							<li>
								<button
									className="desktop__main__menu__item"
									onClick={() => {
										addActiveWindow("Skills");
									}}
								>
									<Icon>brush</Icon>&nbsp;&nbsp;Skills
								</button>
							</li>
							<li>
								<button
									className="desktop__main__menu__item"
									onClick={() => {
										addActiveWindow("Contact");
									}}
								>
									<Icon>account_circle</Icon>&nbsp;&nbsp;Contact
								</button>
							</li>
						</ul>
					</nav>
				)}
				{activeWindows.map((window) => (
					<DesktopWindow
						onClose={() => {
							removeActiveWindow(window);
						}}
						key={window}
					>
						{getWindow(window)}
					</DesktopWindow>
				))}
			</main>
		</div>
	);
};
