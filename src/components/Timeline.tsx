import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBriefcase,
	faExternalLinkAlt,
	faMobileScreen,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
	return (
		<div id="history" className="bg-gray-50 py-12">
			{" "}
			{/* Added background and padding */}
			<div className="items-container max-w-6xl mx-auto">
				{" "}
				{/* Wider container */}
				<h1 className="text-4xl font-bold text-center mb-12 text-indigo-800">
					{" "}
					{/* Enhanced heading */}
					Career History
				</h1>
				<VerticalTimeline layout="1-column-left">
					{" "}
					{/* More organized layout */}
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "white",
							color: "#333",
							boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							borderRadius: "12px",
						}}
						contentArrowStyle={{ borderRight: "7px solid white" }}
						date="2024 - Present"
						iconStyle={{
							background: "#5000ca",
							color: "#fff",
							fontSize: "24px",
						}}
						icon={<FontAwesomeIcon icon={faBriefcase} />}>
						<h1 className="vertical-timeline-element-title text-2xl font-bold text-indigo-700">
							Co-founder & Technical Lead at OneInfo.ai
						</h1>
						<h4 className="vertical-timeline-element-subtitle text-lg text-gray-600">
							Hyderabad, India
						</h4>
						<div className="mt-4 space-y-3">
							<p className="text-gray-700">
								<strong>
									Building an AI-powered platform that automates Instagram DM
									management for creators:
								</strong>
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>
									Architected and developed AI system that filters high-value
									brand collaborations from DM clutter
								</li>
								<li>
									Implemented 24/7 automated DM responses triggered by reel
									comments using keyword-based AI
								</li>
								<li>
									Built comprehensive growth metrics dashboard tracking
									followers, profile views, and engagement analytics
								</li>
								<li>
									Developed intelligent content scheduling and automation system
									for Instagram creators
								</li>
								<li>
									Successfully onboarded 10,000+ creators and processed 2M+ DMs
									with 5M+ total comments
								</li>
								<li>
									Integrated Instagram API for secure account connection and
									real-time data synchronization
								</li>
							</ul>

							<div className="mt-4 flex flex-row items-center gap-4 justify-between w-full">
								<h2 className="font-large font-bold text-gray-700">
									Platform Impact:
								</h2>
								<div className="flex flex-wrap gap-4 mt-2">
									<a
										href="https://oneinfo.ai"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
										<FontAwesomeIcon
											icon={faGlobe}
											className="text-indigo-600"
										/>

										<span>OneInfo.ai</span>
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											className="ml-2"
										/>
									</a>
								</div>
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "white",
							color: "#333",
							boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							borderRadius: "12px",
						}}
						contentArrowStyle={{ borderRight: "7px solid white" }}
						date="2023 - Present"
						iconStyle={{
							background: "#5000ca",
							color: "#fff",
							fontSize: "24px",
						}}
						icon={<FontAwesomeIcon icon={faBriefcase} />}>
						<h1 className="vertical-timeline-element-title text-2xl font-bold text-indigo-700">
							Full-Stack Developer at Zyve
						</h1>
						<h4 className="vertical-timeline-element-subtitle text-lg text-gray-600">
							Hyderabad, India
						</h4>
						<div className="mt-4 space-y-3">
							<p className="text-gray-700">
								<strong>
									Developed and deployed full-scale digital solutions:
								</strong>
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>Built complete mobile apps (iOS & Android) from scratch</li>
								<li>
									Developed responsive web platform with modern frontend
									framework
								</li>
								<li>Implemented CI/CD pipelines for automated deployments</li>
								<li>Integrated payment gateways and third-party APIs</li>
							</ul>

							<div className="mt-4 flex flex-row items-center gap-4 justify-between w-full">
								<h2 className="font-large font-bold text-gray-700">
									Published Apps and Websites:
								</h2>
								<div className="flex flex-wrap gap-4 mt-2">
									<a
										href="https://play.google.com/store/apps/details?id=com.fastyle.user&pcampaignid=web_share"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
										<FontAwesomeIcon
											icon={faMobileScreen}
											className="text-indigo-600"
										/>

										<span>Zyve</span>
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											className="ml-2"
										/>
									</a>
									<a
										href="https://play.google.com/store/apps/details?id=com.fastyle.seller&pcampaignid=web_share"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
										<FontAwesomeIcon
											icon={faMobileScreen}
											className="text-indigo-600"
										/>

										<span>Zyve Vendor</span>
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											className="ml-2"
										/>
									</a>
									<a
										href="https://www.zyve.in"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
										<FontAwesomeIcon
											icon={faGlobe}
											className="text-indigo-600"
										/>

										<span>Zyve.in</span>
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
											className="ml-2"
										/>
									</a>
								</div>
							</div>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "white",
							color: "#333",
							boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							borderRadius: "12px",
						}}
						contentArrowStyle={{ borderRight: "7px solid white" }}
						date="2023 - Present"
						iconStyle={{
							background: "#5000ca",
							color: "#fff",
							fontSize: "24px",
						}}
						icon={<FontAwesomeIcon icon={faBriefcase} />}>
						<h1 className="vertical-timeline-element-title text-2xl font-bold text-indigo-700">
							App Development Lead at GDGC-MLRIT
						</h1>
						<h4 className="vertical-timeline-element-subtitle text-lg text-gray-600">
							MLRIT, Dundigal
						</h4>
						<div className="mt-4 space-y-3">
							<p className="text-gray-700">
								<strong>
									Serving as the App development lead at Google Developer Groups
									on Campus, MLRIT:
								</strong>
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>Mentored over 300 students.</li>
								<li>Conducted hands-on workshops on mobile app development.</li>
								<li>
									Hosted various Google Study Jams, Hacktober Fest, TechSprint,
									and other events.
								</li>
								<li>Led all App Development initiatives in the chapter</li>
							</ul>
						</div>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{
							background: "white",
							color: "#333",
							boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
							borderRadius: "12px",
						}}
						contentArrowStyle={{ borderRight: "7px solid white" }}
						date="2023 - Present"
						iconStyle={{
							background: "#5000ca",
							color: "#fff",
							fontSize: "24px",
						}}
						icon={<FontAwesomeIcon icon={faBriefcase} />}>
						<h1 className="vertical-timeline-element-title text-2xl font-bold text-indigo-700">
							Technical Lead at SPARC-MLRIT
						</h1>
						<h4 className="vertical-timeline-element-subtitle text-lg text-gray-600">
							MLRIT, Dundigal
						</h4>
						<div className="mt-4 space-y-3">
							<p className="text-gray-700">
								<strong>
									Serving as the Technical Lead at Student Program for Awareness
									and Responsible CyberSpace:
								</strong>
							</p>
							<ul className="list-disc pl-5 space-y-2">
								<li>Mentored over 200 students.</li>
								<li>
									Conducted hands-on workshops on privacy and security handling
									in mobile and web apps.
								</li>

								<li>
									Implemented secure coding practices workshops for web and
									mobile applications
								</li>
							</ul>
						</div>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
