import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
	title: "JF | Portfolio",
	description: "I build websites for clients",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-customGrey">{children}</body>
		</html>
	);
}
