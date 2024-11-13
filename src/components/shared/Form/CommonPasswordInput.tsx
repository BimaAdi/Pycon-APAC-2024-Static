import { useState } from "react";
import { FieldValues, Path, UseFormRegisterReturn } from "react-hook-form";
import { Eye } from "./Eye";

export const CommonPasswordInput = ({
	label,
	name,
	value = "",
	onChange,
	placeholder = undefined,
}: {
	label: string;
	name: string;
	value?: string;
	onChange: (e: string) => void;
	placeholder?: string;
}) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={name} className="font-semibold text-[14px]">
				{label}
			</label>
			<div className="w-full relative">
				<input
					id={name}
					name={name}
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
					type={showPassword ? "text" : "password"}
					className="w-full py-[10px] px-[12px] rounded-lg bg-[#F9F9F9]"
					placeholder={placeholder}
				/>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
				<div
					className="absolute right-0 top-0 py-[10px] pr-[12px] hover:cursor-pointer"
					onClick={() => {
						setShowPassword(!showPassword);
					}}
				>
					<Eye />
				</div>
			</div>
		</div>
	);
};

// Integrate with react-hook-form
export const CommonPasswordInputRHF = <
	T extends FieldValues,
	U extends Path<T>,
>({
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
	const [showPassword, setShowPassword] = useState(false);
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="font-semibold text-[14px]">
				{label}
			</label>
			<div className="w-full relative">
				<input
					id={id}
					type={showPassword ? "text" : "password"}
					className="w-full py-[10px] px-[12px] rounded-lg bg-[#F9F9F9]"
					placeholder={placeholder}
					{...register}
				/>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
				<div
					className="absolute right-0 top-0 py-[10px] pr-[12px] hover:cursor-pointer"
					onClick={() => {
						setShowPassword(!showPassword);
					}}
				>
					<Eye />
				</div>
			</div>
		</div>
	);
};
