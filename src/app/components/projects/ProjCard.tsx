"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ps } from "../../constants/variants";

export default function ProjCard({ title, img, vid, tech }: any) {
	const videoRef = React.createRef<HTMLVideoElement>();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const [opacity, setOpacity] = useState(1);

	const handleMouseEnter = () => {
		if (videoRef.current) {
			videoRef.current.play();
			setOpacity(0); // Hide the image
		}
	};

	const handleMouseLeave = () => {
		if (videoRef.current) {
			videoRef.current.pause();

			setOpacity(1); // Show the image
		}
	};

	return (
		<motion.div
			variants={ps}
			initial="hidden"
			animate={isInView ? "show" : "hidden"}
			ref={ref}
			className="bg-black bg-opacity-20 w-full shadow-xl"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="relative aspect-video">
				<video
					ref={videoRef}
					src={vid}
					className="object-cover w-full h-full absolute top-0 left-0"
					loop
					muted
				/>
				<img
					src={img}
					style={{ opacity: opacity, transition: "opacity 0.2s ease-in-out" }}
					className="object-cover w-full h-full absolute top-0 left-0"
					alt="First frame"
				/>
			</div>

			<div className="p-5 ">
				<h1 className="text-3xl text-center font-Fredoka">{title}</h1>
				<div className="flex space-x-5 mt-5 justify-center">
					{tech.map((language: any, index: number) => {
						return (
							<ul
								key={index}
								title={language.title}
								className="text-black px-2 py-1 xs:px-4 xs:py-2 bg-white rounded-full"
							>
								<img className="h-[15px]" src={language.link} />
							</ul>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
}
