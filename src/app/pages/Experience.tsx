import * as React from "react";
import SparkLogo from "../../assets/images/spark.png";
import CranewareLogo from "../../assets/images/craneware.png";
import "./Page.scss";

export const Experience = () => {
	return (
		<div className="pageContainer">
			<h2 className="pageTitle">Experience</h2>
			<div className="pageItem">
				<figure className="pageItem__figure">
					<img
						src={SparkLogo}
						alt="Spark Energy"
						className="pageItem__figure__img"
					/>
					<figcaption className="pageItem__figure__cap">
						Spark Energy
						<time className="pageItem__figure__time">Sept 2019 - Present</time>
					</figcaption>
				</figure>
				<div className="pageItem__info">
					<p>
						I am currently working on the digital team responsible for the tools to
						help customers manage their energy accounts. In this role I have worked on
						creating a design system with bespoke React UI components and used this to
						develop intuitive React applications to help enable Spark's customers. I
						have also architected build and deployment pipelines and integrated end to
						end testing solutions.
					</p>
					<p>
						Another project involved rebuilding the account management portal in
						React, including a redesign from both a visual and product perspective. I
						used monitoring platforms to identify problems and improve the quality of
						our solutions.
					</p>
					<p>
						I have also maintained the existing mobile application and began designing
						the architecture of what would have been its modern replacement, including
						a proof of concept. I explored a range of frameworks and weighed up the
						benefits and disadvantages of different approaches. I learnt how to deploy
						and manage apps on both the Android and Apple app stores.
					</p>
				</div>
			</div>
			<div className="pageItem">
				<figure className="pageItem__figure">
					<img
						src={CranewareLogo}
						alt="Craneware"
						className="pageItem__figure__img"
					/>
					<figcaption className="pageItem__figure__cap">
						Craneware
						<time className="pageItem__figure__time">July 2018 - Sept 2019</time>
					</figcaption>
				</figure>
				<div className="pageItem__info">
					<p>
						This role exposed me to a wide range of technologies and gave me a great
						opportunity to hone my skills. I worked on many high impact projects,
						ranging from implementing a new authentication system for the entire
						product suite, feature delivery, addressing critical security issues to
						rewriting and enhancing legacy front end code into performant Angular
						modules.
					</p>
					<p>
						I performed extensive code reviews and I always tried to include links to
						blogs or documentation along with any suggestions. Although this was more
						time consuming, it was very satisfying to see its impact on subsequent
						pull requests. I led a team of interns to rewrite legacy front end code
						into Angular 6, and liaised with UX and product management to
						simultaneously deliver enhancements. This was a great opportunity to
						mentor and nurture the interns' skills.
					</p>
					<p>
						When developing new features I followed the TDD approach of starting with
						unit tests. This provides me with a solid foundation from which I can
						write clean, efficient and expressive code which I can safely refactor for
						improved readability and structure. I enjoy using many features of a range
						of programming paradigms and I understand the benefits of different
						approaches. I have read books about OOP design patterns and taken courses
						in functional programming, each having a profound impact in how I write
						code.
					</p>
				</div>
			</div>
		</div>
	);
};
