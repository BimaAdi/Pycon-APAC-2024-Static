import { Clock } from "./Clock";

export const ScheduleCard = () => {
	return (
		<div className="relative w-[600px] h-[500px] bg-black rounded-3xl">
			<div className="absolute bottom-3 left-0 p-8 text-white">
				<p className="font-bold text-[32px]">Opening (Main Stage)</p>
				<p className="text-2xl">Event description</p>
				<p className="text-2xl font-bold flex items-center gap-2">
					<Clock />
					<span>09:00 - 09:30 WIB</span>
				</p>
			</div>
		</div>
	);
};
