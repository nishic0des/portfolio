import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import {
	faDesktopAlt,
	faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// 🔥 Your new structured data
export const expertise = [
	{
		title: "Full-Stack Engineering",
		description:
			"I build scalable, production-grade web platforms with strong frontend architecture, backend APIs, authentication systems, and real-time features. My focus is on performance, DX, and clean system design.",
		stack: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"HTML5",
			"Tailwind CSS",
			"SASS",
			"Vite",
			"Node.js",
			"Express.js",
			"MongoDB",
			"PostgreSQL",
			"REST APIs",
			"JWT",
			"bcrypt",
			"OAuth",
			"CORS",
			"Cloudinary",
			"PM2",
			"Nginx",
			"AWS EC2",
			"Vercel",
			"Netlify",
			"Postman",
			"Git",
			"GitHub",
		],
	},
	{
		title: "Cloud, DevOps & Deployment",
		description:
			"I deploy, monitor, and scale production applications across cloud platforms, CI/CD pipelines, and Linux servers.",
		stack: [
			"AWS EC2",
			"Ubuntu",
			"PM2",
			"Nginx",
			"Docker",
			"GitHub Actions",
			"SSL",
			"DNS",
			"Firebase Hosting",
			"Cloud Functions",
			"Vercel",
			"Linux",
			"SSH",
			"Server Hardening",
		],
	},
	{
		title: "Mobile App Development",
		description:
			"I build high-performance mobile apps using Flutter and React Native with real authentication, payments, push notifications, and cloud-connected backends.",
		stack: [
			"Flutter",
			"Dart",
			"React Native",
			"Firebase Auth",
			"Phone OTP",
			"Google Sign-In",
			"Apple Sign-In",
			"Push Notifications",
			"In-App Updates",
			"Firebase Functions",
			"Firestore",
			"Cloudinary",
			"Razorpay",
			"PhonePe",
			"Socket.io",
			"REST APIs",
			"App Store Deployment",
			"Play Store Deployment",
		],
	},
	{
		title: "UI, Motion & Experience Design",
		description:
			"I design and build immersive, animated user interfaces inspired by Apple, Cosmos, and award-winning websites — combining GSAP, smooth scrolling, and micro-interactions.",
		stack: [
			"GSAP",
			"ScrollTrigger",
			"Lenis",
			"Framer Motion",
			"Three.js (basic)",
			"Figma",
			"Glassmorphism",
			"Parallax",
			"Micro-interactions",
			"UX Design",
			"Dark / Light Themes",
			"Responsive Design",
			"Awwwards-style UI",
		],
	},
	{
		title: "Real-Time & Social Platforms",
		description:
			"I design and ship social platforms with messaging, video, live updates, and scalable media systems. I have built systems like VideoTube and Fastyle from scratch to production.",
		stack: [
			"Video Streaming",
			"Cloudinary Media",
			"Socket.io",
			"WebSockets",
			"MongoDB",
			"Firebase",
			"User Feeds",
			"Like / Comment Systems",
			"Notification Systems",
			"Role-Based Access",
			"Admin Panels",
			"Live Chat",
			"Real-time Sync",
		],
	},
	{
		title: "Soft Skills",
		description:
			"I bring strong leadership, communication, and people skills alongside engineering excellence. I’ve led teams, delivered talks, and maintained a CGPA of 9.4 while building multiple real-world products.",
		stack: [
			"Public Speaking",
			"Leadership",
			"Team Collaboration",
			"Mentoring",
			"Problem Solving",
			"Product Thinking",
			"Time Management",
			"Startup Experience",
			"Technical Writing",
			"CGPA 9.4",
		],
	},
];

function Expertise() {
	return (
		<div className="container" id="expertise">
			<div className="skills-container">
				<h1>Expertise</h1>

				<div className="skills-grid">
					{expertise.map((item, index) => (
						<div className="skill" key={index}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>

							<div className="flex-chips">
								<span className="chip-title">Tech stack:</span>
								{item.stack.map((tech, i) => (
									<Chip key={i} className="chip" label={tech} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Expertise;
