import Footer from "./components/Footer";
import ScrollBack from "./components/ScrollBack";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";

export default function Home() {
	return (
		<main className="">
			<ScrollBack />
			<Navbar />
			<section id="hero">
				<Hero />
			</section>
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
