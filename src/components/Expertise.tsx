import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
	faDesktopAlt,
	faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
	"React",
	"Next.js",
	"TypeScript",
	"JavaScript",
	"HTML5",
	"TailwindCSS",
	"Bootstrap",
	"SASS",
	"SQL",
	"PostgreSQL",
	"bcrypt",
	"Vercel",
	"Netlify",
	"SSR",
	"ISR",
	"JWT Refresh Tokens",
	"Postman",
];

const labelsSecond = [
	"React Native",
	"Flutter",
	"Node.js",
	"MongoDB",
	"Firebase",
	"Cloudinary",
	"JWT",
	"OAuth",
	"Riverpod",
	"Zustand",
	"MobX",
	"REST",
	"Docker",
	"Redux",
	"Socket.io",
	"Flutter Test",
	"Expo",
];

const labelsThird = [
	"React",
	"TailwindCSS",
	"Node.js",
	"Material UI",
	"Framer Motion",
	"JWT",
	"Express.js",
	"MongoDB",
	"Zustand",
	"Docker",
	"Postman",
	"CORS",
	"Vercel",
	"Netlify",
];

function Expertise() {
	return (
		<div className="container" id="expertise">
			<div className="skills-container">
				<h1>Expertise</h1>
				<div className="skills-grid">
					<div className="skill">
						<FontAwesomeIcon icon={faReact} size="2x" />
						<h3>Full Stack</h3>
						<p>
							I have built a diverse array of web applications from scratch
							using modern technologies such as React and Flask. I have a strong
							proficiency in the SDLC process and frontend + backend
							development.
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsFirst.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faMobileAndroidAlt} size="2x" />
						<h3>App Development</h3>
						<p>
							I have built a diverse range of mobile applications using modern
							technologies such as React Native and Flutter. I have a strong
							proficiency in the app development lifecycle, including UI/UX
							design, state management, and API integration, ensuring optimal
							performance and user experience across devices.
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsSecond.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faDesktopAlt} size="2x" />
						<h3>Web Development</h3>
						<p>
							I have developed and deployed full-stack web applications using
							modern frameworks and best practices. My expertise lies in
							building scalable and high-performance web solutions, focusing on
							both frontend and backend development. My workflow follows the
							SDLC process, integrating cloud services, real-time features, and
							efficient state management to deliver seamless user experiences.
						</p>
						<div className="flex-chips">
							<span className="chip-title">Tech stack:</span>
							{labelsThird.map((label, index) => (
								<Chip key={index} className="chip" label={label} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Expertise;
