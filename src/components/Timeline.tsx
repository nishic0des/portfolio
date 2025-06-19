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
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Timeline;
