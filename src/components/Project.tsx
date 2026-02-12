import React from "react";

import qna from "../assets/images/qna.png";
import ebook from "../assets/images/ebook.png";
import enterpriseResource from "../assets/images/enterpriseResource.jpg";
import jewellery from "../assets/images/jewellery company.webp";
import bytesize from "../assets/images/bytesize.png";
import gridly from "../assets/images/gridly.png";
import webgen from "../assets/images/webgen.png";
import codesage from "../assets/images/codesage.png";
import "../assets/styles/Project.scss";

function Project() {
	return (
		<>
			<div className="projects-container" id="projects">
				<h1>Personal Projects</h1>
				<div className="projects-grid">
					<div className="project">
						<a
							href="https://bytesize-ten.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<img
								src={bytesize}
								className="zoom"
								alt="thumbnail"
								width="100%"
							/>
						</a>
						<a
							href="https://bytesize-ten.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<h2>Media Optimization SaaS</h2>
						</a>
						<p>
							Developed an AI powered Media Optimization platform that makes
							media compression seamless.
						</p>
					</div>
					<div className="project">
						<a
							href="https://gridly-blush.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<img src={gridly} className="zoom" alt="thumbnail" width="100%" />
						</a>
						<a
							href="https://gridly-blush.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<h2>AI Powered Spreadsheet Application</h2>
						</a>
						<p>
							Built an AI-powered spreadsheet application with a built-in AI
							agent and voice commands.
						</p>{" "}
					</div>
					<div className="project">
						<a
							href="https://webgen-ey4e.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<img src={webgen} className="zoom" alt="thumbnail" width="100%" />
						</a>
						<a
							href="https://webgen-ey4e.vercel.app/"
							target="_blank"
							rel="noreferrer">
							<h2>AI Powered Website Generator</h2>
						</a>
						<p>
							Built an AI-powered website generator that creates websites from
							text prompts.
						</p>{" "}
					</div>

					<div className="project">
						<a
							href="https://github.com/nishic0des/devsolve"
							target="_blank"
							rel="noreferrer">
							<img src={qna} className="zoom" alt="thumbnail" width="100%" />
						</a>
						<a
							href="https://github.com/nishic0des/devsolve"
							target="_blank"
							rel="noreferrer">
							<h2>Interactive QnA Platform</h2>
						</a>
						<p>
							Built an AI-powered Q&A platform enhancing developer learning with
							expert-led video explanations.
						</p>{" "}
					</div>
					<div className="project">
						<img src={codesage} className="zoom" alt="thumbnail" width="100%" />
						<h2>AI Powered Code Analyzer</h2>
						<p>
							Developed an AI-Powered code analyzer that takes source code as
							input and gives a detailed summary, including refactors,
							complexities etc.
						</p>
					</div>
					<div className="project">
						<img
							src={jewellery}
							className="zoom"
							alt="thumbnail"
							width="100%"
						/>
						<h2>Jewellery eCommerce App</h2>
						<p>
							Developed minimalist jewellery e-commerce app with clean
							navigation, high-quality product imagery, and a modern layout.
						</p>
					</div>
					<div className="project">
						<img
							src={enterpriseResource}
							className="zoom"
							alt="thumbnail"
							width="100%"
						/>
						<h2>ERP Dashboard</h2>
						<p>
							Developed an enterprise resource planning (ERP) dashboard with
							real-time analytics, workflow tracking, and data-driven insights
							for efficient business management.
						</p>
					</div>

					<div className="project">
						<img src={ebook} className="zoom" alt="thumbnail" width="100%" />
						<h2>eBook App</h2>
						<p>
							Built an interactive eBook app with annotation, highlighting, and
							note-taking features for an enhanced reading experience.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
