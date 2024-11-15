import { TicketBorderGray } from "./TicketBorderGray";
import { TicketBorderOrange } from "./TicketBorderOrange";
import { BrownCheck } from "./BrownCheck";
import { twMerge } from "tailwind-merge";

export const Ticket = ({
	borderColor = "gray",
	flag = undefined,
	title,
	price,
	description,
	includes,
	isSoldOut = false,
	onClick,
}: {
	borderColor?: "gray" | "orange";
	flag?: string;
	title: string;
	price: string;
	description: string;
	includes: string[];
	isSoldOut?: boolean;
	onClick?: () => void;
}) => {
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			className={twMerge("relative", !isSoldOut && "hover:cursor-pointer")}
			onClick={
				onClick
					? () => {
							onClick();
						}
					: () => {}
			}
		>
			{flag !== undefined ? (
				<div className="absolute -z-10 top-0 w-full text-center">
					<span className="w-[200px] bg-[#FF7125] text-white pb-2 px-10 rounded-b-full">
						{flag}
					</span>
				</div>
			) : (
				<></>
			)}
			<div className="absolute -z-20 left-0 top-0">
				{borderColor === "orange" ? (
					<TicketBorderOrange />
				) : (
					<TicketBorderGray />
				)}
			</div>
			{isSoldOut === true ? (
				<div className="absolute z-10 top-36 p-5 w-full bg-[#FF7125] mx-auto font-bold text-center text-white">
					SOLD OUT
				</div>
			) : (
				<></>
			)}
			<div className="w-[418px] h-[437px] flex flex-col gap-4 px-9 pb-10 pt-20">
				<div className="flex flex-col gap-2">
					<h2 className="text-[#FF7125] text-lg font-bold font-sans">
						{title}
					</h2>
					<h3 className="font-bold text-3xl">{price}</h3>
					<p className="text-lg">{description}</p>
				</div>
				<div className="flex flex-col gap-2">
					<p className="font-bold">Includes:</p>
					<ul className="flex flex-col gap-1">
						{includes.map((item) => (
							<li key={item} className="flex items-center  gap-1">
								<div>
									<BrownCheck />
								</div>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
