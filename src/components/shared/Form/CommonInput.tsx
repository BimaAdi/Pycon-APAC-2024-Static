import { FieldValues, Path, UseFormRegisterReturn } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { Input } from "~/components/ui/input";

export const CommonInput = ({
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
	onChange: (e: string) => void;
	placeholder?: string;
	errorMessage?: string | null;
}) => {
	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<Input
				id={name}
				name={name}
				value={value}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				className={twMerge(
					"py-[10px] px-[12px] rounded-lg bg-[#F9F9F9]",
					errorMessage !== null && "border border-red-500",
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

// Integrate with react-hook-form
export const CommonInputRHF = <T extends FieldValues, U extends Path<T>>({
	id,
	label,
	placeholder = undefined,
	register = undefined,
}: {
	id: string;
	label: string;
	placeholder?: string;
	register?: UseFormRegisterReturn<U>;
}) => {
	return (
		<div className="w-full flex flex-col gap-2">
			<label htmlFor={id} className="font-semibold text-[14px]">
				{label}
			</label>
			<Input
				id={id}
				className="py-[10px] px-[12px] rounded-lg bg-[#F9F9F9]"
				placeholder={placeholder}
				{...register}
			/>
		</div>
	);
};
