import { ReactNode } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const Layout = ({
	children,
	isLogin = false,
}: { children: ReactNode; isLogin?: boolean }) => {
	return (
		<main className="relative min-h-screen">
			<Navbar isLogin={isLogin} />
			{children}
			<div className="tabletOnly:h-[300px]"></div>
			<div className="h-[550px] sm:h-[420px]"></div>
			<Footer />
		</main>
	);
};
