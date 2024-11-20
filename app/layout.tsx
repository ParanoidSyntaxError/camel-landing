import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ptSansNarrowRegular = localFont({
	src: "./fonts/PTSansNarrow-Regular.ttf",
	variable: "--font-sans-narrow"
});

export const metadata: Metadata = {
	title: "Joe Camel",
	description: "Joe Camel token",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${ptSansNarrowRegular.className} antialiased`}
			>
				<main>
					{children}
				</main>
			</body>
		</html>
	);
}
