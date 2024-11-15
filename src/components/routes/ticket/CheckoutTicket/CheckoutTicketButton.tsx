import { ArrowRight } from "./ArrowRight";

export const CheckoutTicketButton = ({
	isLoading = false,
}: { isLoading?: boolean }) => {
	return (
		<button
			disabled={isLoading}
			className="flex items-center gap-2 py-[16px] px-[34px] bg-[#FF7125] rounded-full"
		>
			{isLoading ? (
				<span className="font-bold text-xl text-white">...Processing</span>
			) : (
				<>
					<span className="font-bold text-xl text-white">Checkout Ticket</span>
					<ArrowRight />{" "}
				</>
			)}
		</button>
	);
};
