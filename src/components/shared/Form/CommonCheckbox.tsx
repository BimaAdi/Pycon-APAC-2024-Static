import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Checkbox } from "~/components/ui/checkbox";

export const CommonCheckbox = ({
	label,
	name,
	value = "on",
	checked = false,
	onChange,
	errorMessage = null,
}: {
	label: string;
	name: string;
	value?: string;
	checked?: boolean;
	onChange: (e: boolean) => void;
	errorMessage?: string | null;
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	const onCheckedClick = () => {
		onChange(!isChecked);
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<div className="w-full flex items-center gap-2">
				<Checkbox
					id={name}
					name={name}
					value={isChecked ? value : undefined}
					checked={isChecked}
					onCheckedChange={() => {
						onCheckedClick();
					}}
					className={errorMessage !== null ? "border border-red-500" : ""}
				/>
				<label
					htmlFor={name}
					className={twMerge(
						"font-semibold text-[14px]",
						errorMessage === null ? "text-black" : "text-red-500",
					)}
				>
					{label}
				</label>
			</div>
			{errorMessage !== null ? (
				<p className="text-[14px] text-red-500">{errorMessage}</p>
			) : (
				<></>
			)}
		</div>
	);
};
