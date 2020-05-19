import * as React from "react";
import "./Page.scss";
import "./Skills.scss";

const skills = [
	{ name: "React", img: require("../../assets/images/skills/react.svg") },
	{
		name: "JavaScript",
		img: require("../../assets/images/skills/javascript.svg"),
	},
	{ name: "Angular", img: require("../../assets/images/skills/angular.svg") },
	{ name: "C#", img: require("../../assets/images/skills/csharp.svg") },
	{ name: "CSS", img: require("../../assets/images/skills/css.svg") },
	{
		name: "TypeScript",
		img: require("../../assets/images/skills/typescript.svg"),
	},
	{ name: "Cypress", img: require("../../assets/images/skills/cypress.svg") },
	{ name: "Jest", img: require("../../assets/images/skills/jest.svg") },
	{ name: "NodeJS", img: require("../../assets/images/skills/nodejs.svg") },
	{ name: "CircleCI", img: require("../../assets/images/skills/circleci.svg") },
	{ name: "SQL", img: require("../../assets/images/skills/mysql.svg") },
	{
		name: "Elasticsearch",
		img: require("../../assets/images/skills/elasticsearch.svg"),
	},

	{ name: "Apps", img: require("../../assets/images/skills/android.svg") },
	{
		name: "Bootstrap",
		img: require("../../assets/images/skills/bootstrap.svg"),
	},
	{ name: "Flutter", img: require("../../assets/images/skills/flutter.svg") },
	{ name: "Github", img: require("../../assets/images/skills/github.svg") },
	{ name: "AWS", img: require("../../assets/images/skills/aws.svg") },
	{ name: "Azure", img: require("../../assets/images/skills/azure.svg") },
];

export const Skills = () => {
	return (
		<div className="pageContainer">
			<h2 className="pageTitle">Skills</h2>
			<div className="skillsContainer">
				{skills.map((skill) => (
					<figure className="skillCard" key={skill.name}>
						<img alt={skill.name} src={skill.img} />
						<figcaption>{skill.name}</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
};
