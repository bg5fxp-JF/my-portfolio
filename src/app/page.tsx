"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import ScrollBack from "./components/ScrollBack";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/preloader/Preloader";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll({ lenisOptions: {} });
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);
	return (
		<main className="">
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
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
