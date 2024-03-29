"use client";
import TimelineContainer from "./timeline/TimelineContainer";
import TimelineItem from "./timeline/TimelineItem";
import { motion } from "framer-motion";
import { TimeLineData } from "../../constants/constants";
import { ps, variants } from "../../constants/variants";

export default function About() {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			whileInView="show"
			className="container mx-auto px-[10%] relative text-white "
		>
			<div className=" w-14 h-1 rounded bg-white  mt-14 mb-6  shadow-sm "></div>
			<h4 className="font-Fredoka text-5xl  mb-6  text-shadow shadow-black">
				About me
			</h4>
			<motion.p
				variants={ps}
				className="font-Inter text-sm xs:text-reg font-light"
			>
				I'm a forward-thinking software developer, who thrives in the face of
				challenges and embodies an unwavering commitment to lifelong learning.{" "}
			</motion.p>
			<br />
			<motion.p
				variants={ps}
				className="font-Inter text-sm xs:text-reg font-light"
			>
				In my off hours, you'll find me creating beats across a broad
				spectrum—from R&B to Brazil funk. This isn't just a hobby—it's a
				testament to my creative spirit. Even here, I'm never too far from code,
				as I work with the fascinating world of AI, exploring its potential to
				revolutionise music production.
			</motion.p>
			<br />
			<motion.p
				variants={ps}
				className="font-Inter text-sm xs:text-reg font-light"
			>
				As a software developer, my philosophy is simple: Embrace challenges,
				foster innovation, and promote collaboration. When I'm on your team,
				expect a proactive partner ready to push boundaries, to solve problems,
				and to contribute to our shared success. Dive into the world of software
				development with me—let's create something extraordinary, together!
			</motion.p>

			<motion.div variants={variants} initial="hidden" whileInView="show">
				<h5 className="font-Fredoka text-3xl mt-14 mb-6  text-shadow shadow-black">
					My Timeline
				</h5>
				<TimelineContainer>
					{TimeLineData.map(({ year, text }) => {
						return <TimelineItem year={year} text={text} />;
					})}
				</TimelineContainer>
			</motion.div>

			<br />
		</motion.div>
	);
}
