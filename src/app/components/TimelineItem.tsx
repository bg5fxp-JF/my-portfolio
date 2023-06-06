export default function TimelineItem({ year, text }: any) {
	return (
		<div className="text-white font-Inter">
			<div className="flex flex-row ">
				<h5 className=" text-2xl font-Fredoka my-auto">{year}</h5>{" "}
				<div className=" w-10 h-[2px] rounded bg-white  my-auto ml-4  shadow-sm md:mx-auto"></div>
			</div>
			<p className="text-sm mt-3 font-Inter font-light">{text}</p>
		</div>
	);
}
