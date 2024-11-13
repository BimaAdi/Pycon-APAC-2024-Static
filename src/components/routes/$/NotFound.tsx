import { Link } from "react-router-dom";
import { NotFoundIcon } from "./NotFoundIcon";
import { NotFoundIconMobile } from "./NotFoundIconMobile";
import { PREFIX } from "~/settings";

export const NotFound = () => {
	return (
		<div className="w-full flex flex-col items-center gap-8">
			<div className="hidden sm:block">
				<NotFoundIcon />
			</div>
			<div className="block sm:hidden">
				<NotFoundIconMobile />
			</div>
			<h1 className="max-w-[748px] lg:w-[748px] font-bold text-center text-[#64302D] text-[60px]">
				Oupsss! You&apos;ve Found a 404 Page
			</h1>
			<p className="text-[#333333] text-[20px]">
				In case you keep encountering this issue or have any questions about our
				Pythonic adventures, feel free to contact our Python wranglers at
				pycon@python.or.id
			</p>
			<Link
				to={`${PREFIX}/`}
				className="bg-[#FF7125] py-[8px] px-[17px] rounded-l-full rounded-r-full font-bold text-white text-[20px]"
			>
				Back to Home
			</Link>
		</div>
	);
};
