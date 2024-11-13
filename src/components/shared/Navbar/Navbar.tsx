// import { LoginButton } from "./LoginButton";
// import { RegisterButton } from "./RegisterButton";
import { Link } from "react-router-dom";
import { PyconLogo } from "./PyconLogo";
import { Hamburger } from "./Hamburger";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { LogoutButton } from "./LogoutButton";
import { MyDashboardButton } from "./MyDashboardButton";
import { MyTicketButton } from "./MyTicketButton";
import { PREFIX } from "~/settings";

export const Navbar = ({ isLogin = false }: { isLogin?: boolean }) => {
	const [showBar, setShowBar] = useState(false);

	return (
		<>
			{/* Mobile Version */}
			<nav className="sticky top-0 left-0 right-0 z-30 block lg:hidden py-2 px-4 sm:px-20 bg-[#602D2B]">
				<div className="flex justify-between items-center">
					<PyconLogo />
					<button
						onClick={() => {
							setShowBar(!showBar);
						}}
					>
						<Hamburger />
					</button>
				</div>
				<ul
					className={twMerge(
						"pt-5 font-bold text-white",
						showBar ? "flex flex-col gap-2" : "hidden",
					)}
				>
					{isLogin ? (
						<>
							<hr />
							<li>
								<button
									onClick={() => {
										// signOutMutation.mutate();
									}}
								>
									Logout
								</button>
							</li>
							{/* <li>
								<Link to="/dashboard/my-account">My Account</Link>
							</li> */}
							<li>
								<Link to={`${PREFIX}/dashboard/profile`}>My Dashboard</Link>
							</li>
							<li>
								<Link to={`${PREFIX}/dashboard/my-ticket`}>My Ticket</Link>
							</li>
						</>
					) : (
						<>
							<hr />
							{/* <li>
								<Link to="/login">Login</Link>
							</li>
							<li>
								<Link to="/register">Register</Link>
							</li> */}
						</>
					)}
					<hr />
					<li>
						<Link to={`${PREFIX}/`}>Home</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/schedule`}>Schedule</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/ticket`}>Ticket</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/code-of-conduct`}>Code of Conduct</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/news`}>News</Link>
					</li>
				</ul>
			</nav>
			{/* Desktop version */}
			<nav className="sticky top-0 left-0 right-0 z-30 hidden lg:flex justify-between items-center py-2 px-4 sm:px-20 bg-[#602D2B]">
				<ul className="flex items-center gap-7 text-white font-bold">
					<li>
						<PyconLogo />
					</li>
					<li>
						<Link to={`${PREFIX}/`}>Home</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/schedule`}>Schedule</Link>
					</li>
					{/* <li>Our Speakers</li> */}
					<li>
						<Link to={`${PREFIX}/ticket`}>Ticket</Link>
					</li>
					<li>
						<Link to={`${PREFIX}/code-of-conduct`}>Code of Conduct</Link>
					</li>
					{/* <li>Sponsorship</li> */}
					{/* <li>Organizer</li> */}
					<li>
						<Link to={`${PREFIX}/news`}>News</Link>
					</li>
				</ul>
				<div className="flex gap-5 justify-end items-center">
					{isLogin ? (
						<>
							<Link to={`${PREFIX}/dashboard/profile`}>
								<MyDashboardButton />
							</Link>
							{/* <Link to="/dashboard/my-account">
								<MyAccountButton />
							</Link> */}
							<Link to={`${PREFIX}/dashboard/my-ticket`}>
								<MyTicketButton />
							</Link>
							<LogoutButton
								onClick={() => {
									// signOutMutation.mutate();
								}}
							/>
						</>
					) : (
						<>
							{/* <Link to="/login">
								<LoginButton />
							</Link>
							<Link to="/register">
								<RegisterButton />
							</Link> */}
						</>
						// <RegistrationComingSoonButton />
					)}
				</div>
			</nav>
		</>
	);
};
