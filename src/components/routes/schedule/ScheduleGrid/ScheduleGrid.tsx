import { talksScheduleType } from "~/api/schedule";
import { ScheduleCard } from "./ScheduleCard";
import dayjs from "dayjs";
import { genId } from "~/utils/gen_id";

export const ScheduleGrid = ({
	isUserLoginAndBuyTicket: isUserLogin = false,
	talkSchedule,
}: {
	isUserLoginAndBuyTicket?: boolean;
	talkSchedule: talksScheduleType;
	// talkSchedule: {
	// 	separatorDate: Date;
	// 	talks: {
	// 		id: string;
	// 		room: string;
	// 		title: string;
	// 		speakers: string[];
	// 	}[];
	// }[];
}) => {
	return (
		<div className="flex flex-col gap-8">
			{talkSchedule.map((item) => (
				<div key={genId()}>
					<div className="sm:flex sm:justify-between">
						<h2 className="font-bold text-[#64302D] text-[24px] sm:text-[34px]">
							{dayjs(item.separatorDate).format("DD MMMM YYYY")}
						</h2>
						<h2 className="font-bold text-[#64302D] text-[24px] sm:text-[34px]">
							{`${dayjs(item.separatorDate).format("hh:mm A")} - ${dayjs(item.separatorEndDate).format("hh:mm A")}`}
						</h2>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						{item.talks.map((x) => (
							<ScheduleCard
								key={x.id}
								id={x.id}
								isUserLoginAndBuyTicket={isUserLogin}
								room={x.room}
								title={x.title as string}
								speakers={x.speakers}
								talksDate={new Date(item.separatorDate)}
								talksEndDate={new Date(item.separatorEndDate)}
								abstract={x.abstract as string}
								streaming_link={x.streaming_link}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
