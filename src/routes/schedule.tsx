import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getAllSchedule, talksScheduleType } from "~/api/schedule";
import { DayToggle } from "~/components/routes/schedule/DayToggle";
import { Hero } from "~/components/routes/schedule/Hero";
import { ScheduleGrid } from "~/components/routes/schedule/ScheduleGrid/ScheduleGrid";
import { Layout } from "~/components/shared/Layout";

export async function loader({ request }: LoaderFunctionArgs) {
	// query param validation
	const { searchParams } = new URL(request.url);
	let day = searchParams.get("day") ?? "Day 1";
	if (day !== "Day 1" && day !== "Day 2" && day !== "Day 3") {
		day = "Day 1";
	}

	// get schedule from api
	const response = await getAllSchedule();
	const temp =
		response.status === 200
			? response.data.data.filter((item) => item.name === day)
			: [];

	// parsing schedule
	const result = temp.length > 0 ? temp[0] : null;
	const schedules = result?.schedules ?? [];
	const talkSchedule: talksScheduleType = [];
	for (let i = 0; i < schedules.length; i++) {
		let is_found = false;
		const streaming_link = null;
		for (let j = 0; j < talkSchedule.length; j++) {
			if (
				`${result?.date} ${schedules[i].start}` ===
				talkSchedule[j].separatorDate
			) {
				talkSchedule[j].talks.push({
					id: schedules[i].id,
					code: schedules[i].name,
					room: schedules[i].room ?? "",
					title: schedules[i].name,
					abstract: schedules[i].description,
					speakers: schedules[i].speakers.map((x) => x.name ?? ""),
					start: schedules[i].start ?? "",
					end: schedules[i].end ?? "",
					streaming_link,
				});
				is_found = true;
				break;
			}
		}
		if (!is_found) {
			talkSchedule.push({
				day: result?.name ?? "",
				separatorDate: `${result?.date} ${schedules[i].start}`,
				separatorEndDate: `${result?.date} ${schedules[i].end}`,
				talks: [
					{
						id: schedules[i].id,
						code: schedules[i].name,
						room: schedules[i].room ?? "",
						title: schedules[i].name,
						abstract: schedules[i].description,
						speakers: schedules[i].speakers.map((x) => x.name ?? ""),
						start: schedules[i].start ?? "",
						end: schedules[i].end ?? "",
						streaming_link,
					},
				],
			});
		}
	}

	return {
		talkSchedule,
		day,
	};
}

export default function SchedulePage() {
	const { day, talkSchedule } = useLoaderData() as Awaited<
		ReturnType<typeof loader>
	>;
	return (
		<Layout isLogin={false}>
			<div className="py-[100px]">
				<Hero />
			</div>
			<div className="mx-auto pb-[50px]">
				<DayToggle
					days={[
						{ day: "Day 1", query: "2024-10-25" },
						{ day: "Day 2", query: "2024-10-26" },
						{ day: "Day 3", query: "2024-10-27" },
					]}
					selected={day}
				/>
			</div>
			<div className="max-w-[1300px] mx-auto pb-[50px] px-4 sm:px-20">
				<ScheduleGrid
					isUserLoginAndBuyTicket={false}
					talkSchedule={talkSchedule}
				/>
			</div>
			<div className="mx-auto pb-[50px]">
				<DayToggle
					days={[
						{ day: "Day 1", query: "2024-10-25" },
						{ day: "Day 2", query: "2024-10-26" },
						{ day: "Day 3", query: "2024-10-27" },
					]}
					selected={day}
				/>
			</div>
		</Layout>
	);
}
