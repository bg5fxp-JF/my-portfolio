"use client";

import React, { useState } from "react";

export default function ProjCard({ title, img, vid, tech }: any) {
	const videoRef = React.createRef<HTMLVideoElement>();

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
		<div
			className="bg-black bg-opacity-20 w-full shadow-xl"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div className="relative h-56 sm:h-72">
				<video
					ref={videoRef}
					src={vid}
					className="md:object-cover w-full h-full absolute"
					loop
					muted
				/>
				<img
					src={img}
					style={{ opacity: opacity, transition: "opacity 0.2s ease-in-out" }}
					className=" md:object-cover w-full h-full absolute"
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
								className="text-black text-[6px] px-2 py-1 xs:text-xsm sm:text-sm xs:px-4 xs:py-2 bg-white rounded-full"
							>
								{language}
							</ul>
						);
					})}
				</div>
			</div>
		</div>
	);
}
