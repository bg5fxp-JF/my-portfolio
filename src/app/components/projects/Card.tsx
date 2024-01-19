"use client";
import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Card({
	i,
	title,
	description,
	src,
	link,
	color,
	textColor,
	tech,
	progress,
	range,
	targetScale,
}: any) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	});

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="flex items-center justify-center sticky top-0 h-screen px-6 md:px-16"
		>
			<motion.div
				style={{
					backgroundColor: color || "#323232",
					color: textColor || "white",
					scale,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className="flex flex-col relative -top-[25%]   w-full max-w-[1000px]  p-[50px] origin-top "
			>
				<h2 className=" text-center  text-4xl font-bold">{title}</h2>
				<div className="flex flex-col-reverse md:flex-row md:items-center  mt-10 gap-5 md:gap-[50px] ">
					<div className="flex flex-col gap-5 md:w-[40%] relative text-xsm md:text-reg ">
						<p>{description}</p>
						<div className="flex flex-wrap gap-3  justify-start">
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

						<Link
							href={link}
							target="_blank"
							className=" transition-all hover:underline font-bold"
						>
							View Project
						</Link>
					</div>

					<div className=" relative w-full md:w-[60%] md:h-full  overflow-hidden">
						<motion.div
							className=" w-full h-full aspect-video"
							style={{ scale: imageScale }}
						>
							<Image
								fill
								src={`/images/${src}`}
								alt="image"
								className=" object-cover "
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
