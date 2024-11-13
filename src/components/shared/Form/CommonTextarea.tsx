import { twMerge } from "tailwind-merge";
import { Textarea } from "~/components/ui/textarea";

export const CommonTextarea = ({
	label,
	name,
	value = "",
	onChange,
	placeholder = undefined,
	errorMessage = null,
}: {
	label: string;
	name: string;
	value?: string;
	onChange: (text: string) => void;
	placeholder?: string;
	errorMessage?: string | null;
}) => {
	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<Textarea
				id={name}
				name={name}
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				className={twMerge(
					"py-[10px] px-[12px] rounded-lg bg-[#F9F9F9] min-h-[200px]",
					errorMessage === null
						? "border-transparent"
						: "border border-red-500",
				)}
				placeholder={placeholder}
			/>
			{errorMessage !== null ? (
				<p className="text-red-500">{errorMessage}</p>
			) : (
				<></>
			)}
		</div>
	);
};
