"use client";
import React, { useState, useEffect } from "react";

export default function TimelineContainer({ children }: any) {
	const [activePage, setActivePage] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(2);

	// const updateItemsPerPage = () => {
	// 	// Update the number of items per page depending on the window width
	// 	if (window.innerWidth < 480) {
	// 		setItemsPerPage(2);
	// 	} else if (window.innerWidth < 768) {
	// 		setItemsPerPage(2);
	// 	} else {
	// 		setItemsPerPage(2);
	// 	}
	// };

	// useEffect(() => {
	// 	// Initialize items per page
	// 	updateItemsPerPage();

	// 	// Add resize event listener
	// 	window.addEventListener("resize", updateItemsPerPage);

	// 	// Clean up
	// 	return () => window.removeEventListener("resize", updateItemsPerPage);
	// }, []);

	const totalPages = Math.ceil(React.Children.count(children) / itemsPerPage);

	const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
		const element = e.currentTarget;
		const totalScroll = element.scrollWidth - element.offsetWidth;
		const percentageScrolled = element.scrollLeft / totalScroll;
		const page = Math.round(percentageScrolled * totalPages);
		setActivePage(page);
		console.log(activePage);
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
