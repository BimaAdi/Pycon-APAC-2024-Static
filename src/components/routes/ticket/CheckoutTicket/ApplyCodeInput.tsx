export const ApplyCodeInput = ({
	value,
	onChange,
	onSubmit,
}: {
	value: string;
	onChange: (val: string) => void;
	onSubmit: (val: string) => void;
}) => {
	return (
		<>
			<div className="flex flex-col gap-2 md:hidden">
				<input
					className="w-full border px-[28px] py-[20px] rounded-full pl-5 text-2xl font-bold text-[#64302D] outline-none"
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
				<button
					className="min-w-[150px] py-[16px] px-[24px] border-2 border-[#64302D] rounded-full text-[#64302D]"
					onClick={() => {
						onSubmit(value);
					}}
				>
					Apply Code
				</button>
			</div>
			<div className="hidden w-full md:flex justify-between items-center border px-[28px] py-[20px] rounded-full">
				<input
					className="w-full pl-5 text-2xl font-bold text-[#64302D] outline-none"
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
				<button
					className="min-w-[150px] py-[16px] px-[24px] border-2 border-[#64302D] rounded-full text-[#64302D]"
					onClick={() => {
						onSubmit(value);
					}}
				>
					Apply Code
				</button>
			</div>
		</>
	);
};
