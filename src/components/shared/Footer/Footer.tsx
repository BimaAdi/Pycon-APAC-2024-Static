import { InstagramIcon } from "./InstagramIcon";
import { MailIcon } from "./MailIcon";
import pythonid from "./pythonid.png";
import { TwitterIcon } from "./TwitterIcon";

export const Footer = () => {
	return (
		<footer className="absolute bottom-0 w-full bg-[#64302D] min-h-[431px] flex flex-col justify-between text-white">
			<div className="flex flex-col lg:flex-row justify-start gap-20 lg:gap-[400px] p-5 sm:p-20">
				<div className="max-w-[429px]">
					<div className="flex items-center gap-[42px] pb-[24px]">
						<h2 className="font-bold text-2xl">Organized By</h2>
						<img src={pythonid} alt="pythonid" width={80} height={80} />
					</div>
					<p className="text-justify">
						PyCon APAC 2024 is organized by volunteers, so it may take a week
						for us to reply to inquiries. Thank you for your patience
					</p>
				</div>
				<div className="max-w-[283px]">
					<h2 className="pb-8 font-bold text-2xl">Our Social Media:</h2>
					<ul>
						<li className="flex gap-2 pb-3.5">
							<InstagramIcon />
							<span>pythonid</span>
						</li>
						<li className="flex gap-2 pb-3.5">
							<TwitterIcon />
							<span>id_python</span>
						</li>
						<li className="flex gap-2">
							<MailIcon />
							<span>pycon@python.or.id</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="py-5">
				<hr />
				<p className="pt-5 text-white text-center">
					© PyCon APAC 2024. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
