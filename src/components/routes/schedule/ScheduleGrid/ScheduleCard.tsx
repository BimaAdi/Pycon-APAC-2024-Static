import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "~/components/ui/dialog";
import { PREFIX } from "~/settings";

export const ScheduleCard = ({
	id,
	isUserLoginAndBuyTicket = false,
	room,
	title,
	speakers,
	talksDate,
	talksEndDate,
	abstract = "",
	streaming_link,
}: {
	isUserLoginAndBuyTicket?: boolean;
	id: string;
	room: string;
	title: string;
	speakers: string[];
	talksDate: Date;
	talksEndDate: Date;
	abstract?: string;
	streaming_link: string | null;
}) => {
	const [isLive, setIsLive] = useState(false);

	const checkIsLive = () => {
		const now = new Date();
		if (now >= talksDate && now < talksEndDate) {
			setIsLive(true);
		} else {
			setIsLive(false);
		}
	};

	useEffect(() => {
		checkIsLive();
		const interval = setInterval(() => checkIsLive(), 60000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Dialog>
			<DialogContent className="max-w-[300px] sm:max-w-[600px]">
				<DialogHeader>
					<DialogTitle className="text-left">{title}</DialogTitle>
				</DialogHeader>
				<div className="sm:flex justify-between">
					<p>{room}</p>
					<div className="flex gap-2">
						<p>{`${dayjs(talksDate).format("DD MMMM YYYY")}`}</p>
						<p>{`${dayjs(talksDate).format("hh:mm A")} - ${dayjs(talksEndDate).format("hh:mm A")}`}</p>
					</div>
				</div>
				<hr />
				<div className="flex flex-col gap-2">
					<div className="font-bold">Topic</div>
					<p className="max-h-[150px] md:max-h-[300px] overflow-y-scroll text-justify">
						{abstract}
					</p>
				</div>
				<hr />
				<div className="flex flex-col gap-2">
					<div className="font-bold">Speakers</div>
					<p>{speakers.map((x) => x).join(", ")}</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-bold">Stream Link</div>
					{isUserLoginAndBuyTicket ? (
						streaming_link !== null ? (
							<Link
								className="w-full bg-[#FF7125] mt-[20px] sm:mt-[40px] py-4 font-bold text-[14px] sm:text-[20px] text-white text-center rounded-l-full rounded-r-full"
								to={`${PREFIX}/streaming/${id}`}
							>
								Watch Session
							</Link>
						) : (
							<p>-</p>
						)
					) : (
						<p>You have to login and buy ticket in order to see streamlink</p>
					)}
				</div>
				<DialogFooter></DialogFooter>
			</DialogContent>
			<div className="max-w-[600px] flex flex-col justify-between border border-black rounded-[32px] p-[20px] sm:p-[40px]">
				<div>
					<div className="flex justify-between">
						<p className="text-[18px] sm:text-[24px]">{room}</p>
						{isLive ? (
							<div className="bg-red-500 rounded-full w-5 h-5"></div>
						) : (
							<></>
						)}
					</div>
					<h3 className="font-bold text-[28px] sm:text-[34px] pt-[8px] sm:pt-[16px]">
						{title}
					</h3>
					<p className="text-[18px] sm:text-[24px] pt-[8px] sm:pt-[16px]">
						{speakers.map((x) => x).join(", ")}
					</p>
				</div>
				<DialogTrigger asChild>
					<button className="w-full bg-[#FF7125] mt-[20px] sm:mt-[40px] py-4 font-bold text-[14px] sm:text-[20px] text-white text-center rounded-l-full rounded-r-full">
						See Detail & Watch Session
					</button>
				</DialogTrigger>
			</div>
		</Dialog>
	);
};
