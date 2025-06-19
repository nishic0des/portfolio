import React, { useState, useEffect } from "react";
import {
	Main,
	Expertise,
	Project,
	Contact,
	Navigation,
	Timeline,
	Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

function App() {
	const [mode, setMode] = useState<string>("dark");

	const handleModeChange = () => {
		if (mode === "dark") {
			setMode("light");
		} else {
			setMode("dark");
		}
	};

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}, []);

	return (
		<div
			className={`main-container ${
				mode === "dark" ? "dark-mode" : "light-mode"
			}`}>
			<Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
			<FadeIn transitionDuration={700}>
				<Main />
				<Expertise />
				<Project />
				<Timeline />
				<Contact />
			</FadeIn>
			<Footer />
		</div>
	);
}

export default App;
