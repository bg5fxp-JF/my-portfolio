import { projData } from "../../constants/constants";
import ProjCard from "./ProjCard";
import { motion } from "framer-motion";
import { variants } from "../../constants/variants";

export default function Projects() {
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			whileInView="show"
			className="container mx-auto px-[10%] relative text-white "
		>
			<div className=" w-14 h-1 rounded bg-white  mt-14 mb-6  shadow-sm "></div>
			<h4 className="font-Fredoka text-5xl  mb-6  text-shadow shadow-black">
				Projects
			</h4>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10  justify-items-center  ">
				{projData.map(({ title, img, vid, tech }: any) => {
					return <ProjCard title={title} img={img} vid={vid} tech={tech} />;
				})}
			</div>
		</motion.div>
	);
}
