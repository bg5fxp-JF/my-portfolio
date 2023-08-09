import React from "react";
import { motion } from "framer-motion";
import { slideUp, opacity } from "../../constants/variants";
import { useEffect, useState } from "react";

const words = ["Hello", "Welcome", "To", "My", "Portfolio"];

export default function Preloader() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (index == words.length - 1) return;
		setTimeout(
			() => {
				setIndex(index + 1);
			},
			index == 0 ? 1000 : 150
		);
	}, [index]);
	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="h-screen w-screen fixed top-0 left-0 z-50 text-white flex items-center justify-center bg-customGrey"
		>
			<motion.p
				className="text-5xl font-Fredoka"
				initial="initial"
				animate="enter"
			>
				<span></span>
				{words[index].toUpperCase()}
			</motion.p>
		</motion.div>
	);
}
