import { ScheduleCard } from "./ScheduleCard";

export const Schedule = () => {
	return (
		<div>
			<div className="flex justify-between items-center pb-[41px]">
				<div className="font-bold text-[44px] text-[#64302D]">Schedule</div>
				<div className="font-bold text-[34px] text-[#64302D]">
					18 November 2023 09:00 AM
				</div>
			</div>
			<div className="flex gap-4">
				<ScheduleCard />
				<ScheduleCard />
			</div>
		</div>
	);
};
