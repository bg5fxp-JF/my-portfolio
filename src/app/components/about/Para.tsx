"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Para({ words }: any) {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.6", "start 0"],
	});

	const wordsAr = words.split(" ");
	return (
		<div className="flex flex-col min-h-screen font-Inter items-center justify-center  container mx-auto px-[10%] relative  text-white md:text-2xl">
			<p className=" flex flex-wrap  justify-between" ref={element}>
				{wordsAr.map((word: string, i: number) => {
					const start = i / wordsAr.length;
					const end = start + 1 / wordsAr.length;

					const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
					return (
						<motion.span
							className="mr-2 mt-4"
							key={i}
							style={{ opacity: opacity }}
						>
							{word}
						</motion.span>
					);
				})}
			</p>
		</div>
	);
}
