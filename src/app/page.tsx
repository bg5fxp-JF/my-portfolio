"use client";
import { useEffect } from "react";
import Footer from "./components/Footer";
import ScrollBack from "./components/ScrollBack";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<main className="">
			<ScrollBack />
			<Hero />
			<section id="projects">
				<Projects />
			</section>
			<br />
			<section id="about">
				<About />
			</section>
			<br />
			<br />
			<Footer />
		</main>
	);
}
