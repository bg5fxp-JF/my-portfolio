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
export const prs = {
	hidden: {
		opacity: 0,
		x: 30,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			delay: 0.5,
		},
	},
};

export const opacity = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 0.75,
		transition: { duration: 1, delay: 0.2 },
	},
};

export const slideUp = {
	initial: {
		top: 0,
	},
	exit: {
		top: "-100vh",
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
	},
};
