import { useState } from "react";
import { twMerge } from "tailwind-merge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/components/ui/select";

export const CommonSelect = ({
	label,
	name,
	value = "",
	placeholder,
	onChange,
	options = [],
	errorMessage = null,
}: {
	label: string;
	name: string;
	value?: string;
	placeholder?: string;
	onChange: (e: string) => void;
	options?: { name: string; value: string }[];
	errorMessage?: string | null;
}) => {
	const [selectedSelect, setSelectedSelect] = useState(value);

	const onSelectChange = (value: string) => {
		onChange(value);
		setSelectedSelect(value);
	};

	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<Select onValueChange={onSelectChange} name={name} value={value}>
				<SelectTrigger
					className={twMerge(
						"w-full py-[21px] px-[12px] rounded-lg bg-[#F9F9F9] border-transparent",
						selectedSelect === "" ? "text-gray-400" : "text-black",
						errorMessage !== null && "border border-red-500",
					)}
				>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent
					id={name}
					className="py-[21px] px-[12px] rounded-lg bg-[#F9F9F9] text-black"
				>
					{options.map((x) => (
						<SelectItem key={x.value} value={x.value}>
							{x.name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
			{errorMessage !== null ? (
				<p className="text-red-500">{errorMessage}</p>
			) : (
				<></>
			)}
		</div>
	);
};
