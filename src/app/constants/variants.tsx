export const variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const ps = {
	hidden: {
		opacity: 0,
		x: 30,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};
