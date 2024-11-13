import { Button } from "~/components/ui/button";
import { SubtractIcon } from "./SubtractIcon";
import { ArrowRightIcon } from "./ArrowRightIcon";
import { MainIcon } from "./MainIcon";
import { Link } from "react-router-dom";
import { PREFIX } from "~/settings";

export const Hero = () => {
	return (
		<div className="w-full flex justify-start lg:justify-between">
			<div>
				<div className="flex flex-col sm:flex-row gap-6 text-xl sm:text-2xl pb-[25px]">
					<div className="max-w-[150px] py-2 px-4 bg-gradient-to-r from-[#FFFFFF66] to-[#02010166] rounded-full border border-white text-white text-xs">
						PYCON APAC 2024
					</div>
					<div className="flex gap-2">
						<SubtractIcon />
						<a
							href="https://maps.app.goo.gl/TeNwDfaQ7fQAz2bJ8"
							className="text-white hover:cursor-pointer"
						>
							UNU Yogyakarta
						</a>
					</div>
				</div>
				<p className="text-white sm:text-3xl pb-[17px]">
					We are waiting to see you again!
				</p>
				<p className="text-white font-bold text-[30px] sm:text-[54px]">
					25th - 27th Oct, 2024
				</p>
				<p className="text-white font-bold text-[30px] sm:text-[54px] pb-[32px]">
					Yogyakarta, Indonesia
				</p>
				<Link to={`${PREFIX}/ticket`}>
					<Button className="flex px-10 py-6 gap-2 bg-white rounded-full text-lg sm:text-xl text-[#64302D] font-bold">
						<span>Buy Ticket</span>
						{/* <span>Ticket Coming</span> */}
						<ArrowRightIcon />
					</Button>
				</Link>
			</div>
			<div className="hidden xl:block">
				<MainIcon />
			</div>
		</div>
	);
};
