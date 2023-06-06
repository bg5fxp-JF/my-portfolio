import Link from "next/link";

export default function Footer() {
	return (
		<div className="container mx-auto text-white">
			<div className=" w-full h-[1px] rounded bg-white  shadow-sm "></div>
			<div className="flex flex-col xs:flex-row mt-11 space-y-10 xs:space-y-0 xs:space-x-24 sm:space-x-40">
				<div className="flex flex-col ">
					<h5 className=" text-xl font-Fredoka mb-4">Call</h5>
					<Link
						href="tel:+447569994390"
						className="text-xsm xs:text-sm font-thin font-Inter"
					>
						+447569994390
					</Link>
				</div>
				<div className="flex flex-col ">
					<h5 className=" text-xl font-Fredoka mb-4">Email</h5>
					<Link
						href="mailto:jacobfecunda@outlook.com"
						className="text-xsm xs:text-sm font-thin font-Inter"
					>
						jacobfecunda@outlook.com
					</Link>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}
