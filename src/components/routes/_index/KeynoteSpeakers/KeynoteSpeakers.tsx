import { LeftPeacock } from "../LeftPeacock";
import { Pagination } from "./Pagination";
import { RightPeacock } from "../RightPeacock";
import { SpeakerCard } from "./SpeakerCard";

export const KeynoteSpeakers = () => {
	return (
		<div className="relative w-full">
			{/* <div className="absolute left-0 top-20 -z-10 w-full -skew-y-3 bg-slate-100 min-h-[200px]"></div>
			<div className="absolute left-0 top-40 -z-10 w-full bg-slate-100 min-h-[200px]"></div> */}
			<div className="flex flex-col items-center gap-12 min-h-[200px]">
				<div className="flex items-center gap-4">
					<LeftPeacock />
					<div className="flex flex-col items-center">
						<h3 className="font-bold text-[44px] text-[#64302D]">
							Keynote Speakers
						</h3>
						<div className="min-w-[126px] border-2 border-[#FF7125]"></div>
					</div>
					<RightPeacock />
				</div>
				<div className="flex gap-8">
					<SpeakerCard
						name="Arie Wahyu Wijayanto"
						description="Python for Government Institution: Producing Better Official Statistics"
					/>
					<SpeakerCard
						name="Arie Wahyu Wijayanto"
						description="Python for Government Institution: Producing Better Official Statistics"
					/>
					<SpeakerCard
						name="Arie Wahyu Wijayanto"
						description="Python for Government Institution: Producing Better Official Statistics"
					/>
				</div>
				<Pagination />
			</div>
		</div>
	);
};
