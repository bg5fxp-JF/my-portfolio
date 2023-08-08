"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";

export default function Hero() {
	const background: any = useRef(null);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: "top",
				end: "+=500px",
			},
		});

		timeline.to(background.current, { clipPath: `inset(10%)` });
	}, []);

	return (
		<div className="flex">
			<div className="relative w-full h-[120vh] ">
				<div ref={background} className="w-full  absolute h-[130vh] ">
					<Image
						className=" object-cover brightness-75 shadow-xl"
						src={"/images/jf.jpg"}
						fill={true}
						alt="JF"
					/>
				</div>
				<Navbar />
				<div className="container mx-auto relative p-5">
					<div data-scroll data-scroll-speed="0.5" className="text-white pt-7">
						<p className="font-Inter text-7xl xs:text-8xl sm:text-10xl md:text-10xl text-right font-medium ">
							<span className="underline underline-offset-8">I'm</span>{" "}
							<span className="underline underline-offset-8">Jacob</span>
						</p>
						<br />
						<p className="font-Inter text-6xl xs:text-7xl sm:text-10xl md:text-10xl text-right font-medium">
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
