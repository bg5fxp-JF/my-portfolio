"use client";
import Para from "./Para";
import { motion } from "framer-motion";

export default function About2() {
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
					About
				</motion.h1>
				{/* <Para words="As a software developer, my philosophy is simple: Embrace challenges, foster innovation, and promote collaboration. When I'm on your team, expect a proactive partner ready to push boundaries, to solve problems, and to contribute to our shared success. Dive into the world of software development with me—let's create something extraordinary, together!" /> */}
			</div>
			<Para words="I'm a forward-thinking Full-Stack Web3 Developer, who thrives in the face of challenges and embodies an unwavering commitment to lifelong learning. My philosophy is simple: Embrace challenges, foster innovation, and promote collaboration. When I'm on your team, expect a proactive partner ready to push boundaries, to solve problems, and to contribute to our shared success. Dive into the world of Web3 with me—let's create something extraordinary, together!" />
		</>
	);
}
