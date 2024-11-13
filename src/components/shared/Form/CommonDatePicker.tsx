import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import dayjs from "dayjs";
import { DayPicker } from "react-day-picker";

export const CommonDatePicker = ({
	label,
	name,
	value = undefined,
	onChange,
	errorMessage = null,
}: {
	label: string;
	name: string;
	value?: Date;
	onChange: (e: Date | undefined) => void;
	errorMessage?: string | null;
}) => {
	const [date, setDate] = useState<Date | undefined>(value);

	const onSelect = (day: Date | undefined) => {
		onChange(day);
		setDate(day);
	};

	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<input
				type="hidden"
				name={name}
				value={value === undefined ? "" : dayjs(date).format("YYYY-MM-DD")}
			/>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={"outline"}
						className={cn(
							"w-full py-[21px] px-[12px] rounded-lg bg-[#F9F9F9] justify-start text-left font-normal",
							!date && "text-gray-400",
							errorMessage === null
								? "border-transparent"
								: "border border-red-500",
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0">
					<DayPicker
						mode="single"
						captionLayout="dropdown"
						classNames={{
							caption_label: "hidden",
							month: "w-[250px]",
							month_grid: "w-[250px]",
							day: "text-center",
							selected: "bg-[#64302D] rounded-full text-white text-center",
						}}
						defaultMonth={date}
						startMonth={new Date(1900, 1)}
						endMonth={new Date()}
						selected={date}
						onSelect={(day: Date | undefined) => {
							onSelect(day);
						}}
					/>
				</PopoverContent>
			</Popover>
			{errorMessage !== null ? (
				<p className="text-red-500">{errorMessage}</p>
			) : (
				<></>
			)}
		</div>
	);
};
