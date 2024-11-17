import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { PREFIX } from "~/settings";

export const DayToggle = ({
	days,
	selected,
}: { days: { day: string; query: string }[]; selected: string }) => {
	return (
		// <div className="max-w-[310px] mx-auto flex justify-between gap-2 rounded-full bg-[#EFEAEA] py-2 px-3">
		// 	{days.map((x) => (
		// 		<Link
		// 			to={`/schedule?day=${x.query}`}
		// 			key={x.day}
		// 			className={twMerge(
		// 				"rounded-l-full rounded-r-full text-center py-3 px-6 font-bold hover:underline hover:cursor-pointer",
		// 				x.query === selected
		// 					? "bg-[#64302D] text-white"
		// 					: "bg-transparent text-#64302D",
		// 			)}
		// 		>
		// 			{x.day}
		// 		</Link>
		// 	))}
		// </div>
		<div className="max-w-[310px] mx-auto flex justify-between gap-2 rounded-full bg-[#EFEAEA] py-2 px-3">
			{days.map((x) => (
				<Link
					to={`${PREFIX}/schedule?day=${x.day}`}
					key={x.day}
					className={twMerge(
						"rounded-l-full rounded-r-full text-center py-3 px-6 font-bold hover:underline hover:cursor-pointer",
						x.day === selected
							? "bg-[#64302D] text-white"
							: "bg-transparent text-#64302D",
					)}
				>
					{x.day}
				</Link>
			))}
		</div>
	);
};
