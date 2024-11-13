import { twMerge } from "tailwind-merge";

export const CommonSubmitButton = ({
	label,
	isLoading = false,
	isDissabled: dissable = false,
}: { label: string; isLoading?: boolean; isDissabled?: boolean }) => {
	return (
		<button
			disabled={dissable}
			className={twMerge(
				"w-full text-center text-white py-[10px] rounded-lg",
				dissable ? "bg-[#A5A5A5]" : "bg-[#64302D]",
			)}
		>
			{isLoading ? "...Loading" : label}
		</button>
	);
};
