import { ArrowRight } from "../ArrowRight";
import { LeftPeacock } from "../LeftPeacock";
import { RightPeacock } from "../RightPeacock";
import { PatreonCard } from "./PatreonCard";

export const Patreon = () => {
	return (
		<div className="w-full flex flex-col gap-[45px] items-center">
			<div className="flex items-center gap-4">
				<LeftPeacock />
				<div className="flex flex-col items-center">
					<h3 className="font-bold text-[44px] text-[#64302D]">Patreon</h3>
					<div className="min-w-[126px] border-2 border-[#FF7125]"></div>
				</div>
				<RightPeacock />
			</div>
			<div className="w-full flex justify-center gap-7">
				<PatreonCard name="Robert D Junior" job="Designer" />
				<PatreonCard name="Robert D Junior" job="Front End Developer" />
				<PatreonCard name="Robert D Junior" job="Back End Developer" />
			</div>
			<button className="border border-[#FF7125] rounded-full text-[#FF7125] flex items-center gap-1 px-4 py-2">
				<span className="font-bold">See All Patreons</span>
				<ArrowRight />
			</button>
		</div>
	);
};
