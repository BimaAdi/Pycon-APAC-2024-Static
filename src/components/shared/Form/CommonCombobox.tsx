import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "~/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "~/components/ui/popover";
import { twMerge } from "tailwind-merge";

export const CommonCombobox = ({
	label,
	name,
	value = "",
	placeholder,
	onChange,
	onSearch = () => {},
	options = [],
	dissabled = false,
	errorMessage = null,
}: {
	label: string;
	name: string;
	value?: string;
	placeholder?: string;
	onChange: (e: string) => void;
	onSearch?: (e: string) => void;
	options?: { name: string; value: string }[];
	dissabled?: boolean;
	errorMessage?: string | null;
}) => {
	const [open, setOpen] = React.useState(false);

	const getOptionsBy = ({
		name = undefined,
		val = undefined,
	}: { name?: string; val?: string }) => {
		let selected = options;
		if (name) {
			selected = selected.filter((item) => item.name === name);
		}

		if (val) {
			selected = selected.filter((item) => item.value === val);
		}

		if (selected.length === 0) {
			return null;
		}
		return selected[0];
	};

	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<input id={name} name={name} type="hidden" value={value} />
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						role="combobox"
						aria-expanded={open}
						disabled={dissabled}
						className={twMerge(
							"w-full py-[21px] px-[12px] rounded-lg bg-[#F9F9F9] justify-between",
							dissabled ? "text-gray-400" : "text-black",
							errorMessage === null
								? "border-transparent"
								: "border border-red-500",
						)}
					>
						{value
							? options.find((item) => item.value === value)?.name
							: placeholder}
						<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[800px] p-0">
					<Command>
						<CommandInput
							placeholder={placeholder}
							onValueChange={(x) => {
								onSearch(x);
							}}
						/>
						<CommandList>
							<CommandEmpty>Not found.</CommandEmpty>
							<CommandGroup>
								{options.map((item) => (
									<CommandItem
										key={item.value}
										value={item.name}
										onSelect={(currentValue) => {
											onChange(
												getOptionsBy({ name: currentValue })?.value ?? "",
											);
											setOpen(false);
										}}
									>
										<Check
											className={cn(
												"mr-2 h-4 w-4",
												getOptionsBy({ val: value })?.name === item.name
													? "opacity-100"
													: "opacity-0",
											)}
										/>
										{item.name}
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
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
