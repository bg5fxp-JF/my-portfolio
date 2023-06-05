"use client";
import { useEffect } from "react";

export default function Hero() {
	useEffect(() => {
		const parallaxText = document.getElementById("parallax-text1");
		const parallaxText2 = document.getElementById("parallax-text2");

		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;

			if (parallaxText)
				parallaxText.style.transform = `translateY(${scrollPosition * -0.3}px)`;
			if (parallaxText2)
				parallaxText2.style.transform = `translateX(${
					scrollPosition * -0.3
				}px)`;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="container mx-auto relative">
			<div
				className="inset-0 bg-cover bg-center shadow-xl"
				style={{ backgroundImage: "url(/images/jf.jpg)" }}
			>
				<div className="relative p-5 bg-black bg-opacity-20">
					<div id="parallax-text1" className="text-white pt-7">
						<p className="font-Inter  text-8xl sm:text-10xl text-right font-medium ">
							<span className="underline underline-offset-8">I'm</span>{" "}
							<span className="underline underline-offset-8">Jacob</span>
						</p>
						<br />
						<p
							id="parallax-text2"
							className="font-Inter text-8xl sm:text-10xl text-right font-medium"
						>
							I build
							<br />
							websites <br /> for clients
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
