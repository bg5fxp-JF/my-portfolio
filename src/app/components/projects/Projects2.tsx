"use client";
import { projects } from "@/app/constants/constants";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Projects2() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	return (
		<>
			<div className="flex items-center justify-center min-h-screen">
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					transition={{ delay: 0.5, type: "easeInOut", duration: 0.75 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center text-7xl text-white font-Fredoka"
				>
					Projects
				</motion.h1>
			</div>
			<div ref={container} className="">
				{projects.map((project, i) => {
					const targetScale = 1 - (projects.length - i) * 0.04;
					return (
						<Card
							key={`p_${i}`}
							i={i}
							{...project}
							progress={scrollYProgress}
							range={[i * 0.2, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</div>
		</>
	);
}
