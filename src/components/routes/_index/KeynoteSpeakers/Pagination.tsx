import { ArrowLeft } from "../ArrowLeft";
import { ArrowRight } from "../ArrowRight";

export const Pagination = () => {
	return (
		<div className="flex gap-5 items-center">
			<div className="flex gap-2">
				<button className="border border-[#FF7125] rounded-full w-[42px] h-[42px] flex justify-center items-center bg-white ">
					<ArrowLeft />
				</button>
				<button className="border border-[#FF7125] rounded-full w-[42px] h-[42px] flex justify-center items-center bg-white ">
					<ArrowRight />
				</button>
			</div>
			<button className="border border-[#FF7125] rounded-full text-[#FF7125] flex items-center gap-1 px-4 py-2">
				<span className="font-bold">See All Speakers</span>
				<ArrowRight />
			</button>
		</div>
	);
};
