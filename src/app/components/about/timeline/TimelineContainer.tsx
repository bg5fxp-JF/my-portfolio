"use client";
import React, { useState } from "react";

export default function TimelineContainer({ children }: any) {
	const [activePage, setActivePage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(2);

	const totalPages = Math.ceil(React.Children.count(children) / itemsPerPage);

	const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget;
		const totalScroll = element.scrollWidth - element.offsetWidth;
		const percentageScrolled = element.scrollLeft / totalScroll;
		const page = Math.round(percentageScrolled * totalPages);
		setActivePage(page);
	};

	return (
		<>
			<div
				className="overflow-x-scroll container-snap snap snap-x h-[your-height] py-4 flex space-x-10"
				onScroll={scrollHandler}
			>
				{React.Children.map(children, (child: any) => (
					<div className="snap-start w-screen justify-center">{child}</div>
				))}
			</div>
			<div className="flex justify-center space-x-2 pt-4 md:hidden">
				{Array.from({ length: totalPages }).map((_, index) => (
					<div
						className={`h-2 w-2 rounded-full ${
							index === activePage ||
							(index === itemsPerPage - 1 && activePage === itemsPerPage)
								? "bg-white"
								: "bg-gray-500"
						}`}
					></div>
				))}
			</div>
		</>
	);
}
