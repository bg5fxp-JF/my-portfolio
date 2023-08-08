"use client";
import Link from "next/link";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";

export default function Navbar() {
	function handleMenuClick() {
		const btn = document.getElementById("menu-btn");
		const nav = document.getElementById("menu");
		if (btn) btn.classList.toggle("open");

		toggleOpen();
	}

	const variants = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};

	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);

	return (
		<nav className="relative container mx-auto  p-6 z-10">
			<div className="flex items-center justify-between text-white text-shadow shadow-black">
				<Link href="/">
					<p className="font-Fredoka text-5xl">J F</p>
				</Link>

				<div className="hidden space-x-12 md:flex">
					<div className="flex space-x-6">
						<p
							onClick={() => {
								const element = document.getElementById("projects");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="font-Fredoka transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
						>
							Projects
						</p>
						<p
							onClick={() => {
								const element = document.getElementById("about");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="font-Fredoka transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
						>
							About
						</p>
					</div>

					<div className="flex space-x-6">
						<Link href="https://github.com/bg5fxp-JF">
							<AiFillGithub
								className="transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
								size="1.75rem"
							/>
						</Link>
						<Link href="https://www.linkedin.com/in/jacob-fecunda-40047b184/">
							<AiFillLinkedin
								className="transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
								size="1.75rem"
							/>
						</Link>
					</div>
				</div>

				<button
					id="menu-btn"
					className="flex hamburger md:hidden focus:outline-none "
					onClick={handleMenuClick}
				>
					<span className="hamburger-top rounded"></span>
					<span className="hamburger-middle rounded"></span>
					<span className="hamburger-bottom rounded"></span>
				</button>
			</div>

			<AnimatePresence mode="wait">
				<motion.div
					initial="hidden"
					animate={isOpen ? "show" : "hidden"}
					exit="hidden"
					ref={containerRef}
					variants={variants}
					className="md:hidden"
				>
					<div
						id="menu"
						className="absolute flex-col items-center flex self-end py-8 mt-10 space-y-6 font-bold bg-black sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-40"
					>
						<p
							onClick={() => {
								const element = document.getElementById("projects");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
									handleMenuClick();
								}
							}}
							className="font-Fredoka transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
						>
							Projects
						</p>
						<p
							onClick={() => {
								const element = document.getElementById("about");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
									handleMenuClick();
								}
							}}
							className="font-Fredoka transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
						>
							About
						</p>
						<div className="flex space-x-6">
							<Link href="https://github.com/bg5fxp-JF">
								<AiFillGithub
									className="transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
									size="1.75rem"
								/>
							</Link>
							<Link href="https://www.linkedin.com/in/jacob-fecunda-40047b184/">
								<AiFillLinkedin
									className="transition duration-300 ease-in-out text-white rounded-full  transform hover:scale-125 cursor-pointer"
									size="1.75rem"
								/>
							</Link>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</nav>
	);
}
