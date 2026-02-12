import React from "react";
import "../assets/styles/Main.scss";
import img from "../assets/images/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Main() {
	return (
		<div className="container">
			<div className="about-section">
				<div className="image-wrapper w-32 h-32 rounded-full">
					<img src={img} alt="Avatar" className="fill" />
				</div>
				<div className="content">
					<h1>K P Nishigandha</h1>
					<p>Full Stack Developer</p>
					<div className="social-links">
						<a
							href="https://github.com/nishic0des"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
							aria-label="GitHub Profile">
							<FontAwesomeIcon icon={faGithub} size="2x" />
						</a>
						<a
							href="https://www.linkedin.com/in/k-p-nishigandha-404353343/"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
							aria-label="LinkedIn Profile">
							<FontAwesomeIcon icon={faLinkedin} size="2x" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main;
