import * as React from "react";
import "./Page.scss";
import "./Skills.scss";

import ImgReact from "../../assets/images/skills/react.svg";
import ImgJavascript from "../../assets/images/skills/javascript.svg";
import ImgAngular from "../../assets/images/skills/angular.svg";
import ImgCSharp from "../../assets/images/skills/csharp.svg";
import ImgCSS from "../../assets/images/skills/css.svg";
import ImgTypescript from "../../assets/images/skills/typescript.svg";
import ImgCypress from "../../assets/images/skills/cypress.svg";
import ImgJest from "../../assets/images/skills/jest.svg";
import ImgNodeJs from "../../assets/images/skills/nodejs.svg";
import ImgCircleCI from "../../assets/images/skills/circleci.svg";

import ImgSql from "../../assets/images/skills/mysql.svg";
import ImgElastic from "../../assets/images/skills/elasticsearch.svg";
import ImgApps from "../../assets/images/skills/android.svg";
import ImgFlutter from "../../assets/images/skills/flutter.svg";
import ImgBootstrap from "../../assets/images/skills/bootstrap.svg";
import ImgGithub from "../../assets/images/skills/github.svg";
import ImgAws from "../../assets/images/skills/aws.svg";
import ImgAzure from "../../assets/images/skills/azure.svg";

const skills = [
	{ name: "React", img: ImgReact },
	{
		name: "JavaScript",
		img: ImgJavascript,
	},
	{ name: "Angular", img: ImgAngular },
	{ name: "C#", img: ImgCSharp },
	{ name: "CSS", img: ImgCSS },
	{
		name: "TypeScript",
		img: ImgTypescript,
	},
	{ name: "Cypress", img: ImgCypress },
	{ name: "Jest", img: ImgJest },
	{ name: "NodeJS", img: ImgNodeJs },
	{ name: "CircleCI", img: ImgCircleCI },
	{ name: "SQL", img: ImgSql },
	{
		name: "Elasticsearch",
		img: ImgElastic,
	},

	{ name: "Apps", img: ImgApps },
	{
		name: "Bootstrap",
		img: ImgBootstrap,
	},
	{ name: "Flutter", img: ImgFlutter },
	{ name: "Github", img: ImgGithub },
	{ name: "AWS", img: ImgAws },
	{ name: "Azure", img: ImgAzure },
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
