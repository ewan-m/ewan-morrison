import * as React from "react";
import "./Page.scss";
import EdinburghUniversityLogo from "../../assets/images/edinburgh.png";
import StJohns from "../../assets/images/stjohns.png";
import ECA from "../../assets/images/eca.png";

export const Education = () => {
	return (
		<div className="pageContainer">
			<h2 className="pageTitle">Education</h2>

			<div className="pageItem">
				<figure className="pageItem__figure">
					<img
						src={EdinburghUniversityLogo}
						alt="University of Edinburgh"
						className="pageItem__figure__img"
					/>
					<figcaption className="pageItem__figure__cap">
						The University of Edinburgh
						<time className="pageItem__figure__time">Sept 2015 - June 2018</time>
					</figcaption>
				</figure>
				<div className="pageItem__info">
					<p>
						I was awarded an upper second class honours physics degree. My time at
						university gave me a very solid grounding in mathematics and logical
						thinking. It also taught me how to approach problems in intelligent and
						novel ways.
					</p>
					<p>
						I focused on programming based classes and tackled challenges such as
						efficiently simulating complex systems (including a quantum processor),
						creating machine learning based prediction models, and statistical data
						analysis. The majority of my coding was done in Python.
					</p>
				</div>
			</div>
			<div className="pageItem">
				<figure className="pageItem__figure">
					<img
						src={StJohns}
						alt="St Johns Academy"
						className="pageItem__figure__img"
					/>
					<figcaption className="pageItem__figure__cap">
						St Johns Academy
						<time className="pageItem__figure__time">Sept 2009 - June 2015</time>
					</figcaption>
				</figure>
				<div className="pageItem__info">
					<p>
						My achievements at school also include being awarded the best grades in my
						year and winning the school Dux medal.
					</p>
					<table className="table">
						<thead>
							<tr>
								<th>Subject</th>
								<th>Level</th>
								<th>Grade</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Physics</td>
								<td>Adv. Higher</td>
								<td>A</td>
							</tr>
							<tr>
								<td>Spanish</td>
								<td>Adv. Higher</td>
								<td>A</td>
							</tr>
							<tr>
								<td>Maths</td>
								<td>Adv. Higher</td>
								<td>A</td>
							</tr>
							<tr>
								<td>Chemistry</td>
								<td>Higher</td>
								<td>A</td>
							</tr>
							<tr>
								<td>English</td>
								<td>Higher</td>
								<td>B</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="pageItem">
				<figure className="pageItem__figure">
					<img
						src={ECA}
						alt="Edinburgh College of Art"
						className="pageItem__figure__img"
					/>
					<figcaption className="pageItem__figure__cap">
						Edinburgh College of Art
						<time className="pageItem__figure__time">January 2020 - April 2020</time>
					</figcaption>
				</figure>
				<div className="pageItem__info">
					<p>
						I took part in a Graphic Design night class to improve my design skills. I
						learnt about the use of typography, colour and it covered a lot of the
						fundamentals of good design. It was a very enjoyable class and I've been
						able to apply the concepts I've learnt about here to both my work and
						personal projects.
					</p>
				</div>
			</div>
		</div>
	);
};
