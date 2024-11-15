import { ApplyCodeInput } from "./ApplyCodeInput";
import { useNavigation } from "react-router-dom";
import { priceToString } from "../utils";
import { CheckoutTicketButton } from "./CheckoutTicketButton";
// import { useReCaptcha } from "~/hooks/useReCaptcha";
import { useMemo, useState } from "react";

export const CheckoutTicket = ({
	id,
	name,
	price,
	errorMessage,
}: {
	id: string | null;
	name: string | null;
	price: number | null;
	errorMessage?: string;
}) => {
	const [code, setCode] = useState("");
	const { state } = useNavigation();

	const grandTotal = useMemo(() => {
		let res = price ?? 0;

		if (res < 0) {
			res = 0;
		}

		return res;
	}, [price]);

	return (
		<div className="flex flex-col items-center gap-[44px] py-20 px-10 xl:px-48 border-2 bg-white border-[#EBEBEB] rounded-[50px]">
			<div className="text-[#64302D] font-bold text-2xl">
				Apply your voucher for get discount
			</div>
			{/* <p className="text-xl text-[#64302D] font-bold">
				{voucherValidateQuery.data?.status === 200 ? (
					voucherValidateQuery.data.data.success ? (
						"voucher found"
					) : (
						"invalid voucher"
					)
				) : (
					<></>
				)}
			</p> */}
			<ApplyCodeInput
				value={code}
				onChange={(val) => {
					setCode(val);
				}}
				onSubmit={() => {
					// voucherValidateQuery.refetch();
				}}
			/>
			<div className="w-full flex flex-col gap-4">
				{errorMessage ? (
					<div className="text-red-500 text-center text-lg">{errorMessage}</div>
				) : (
					<></>
				)}
				<div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-stretch">
					<div className="text-[#FF7125] text-[22px] md:text-[32px] font-bold">
						Grand Total
					</div>
					<div className="text-[#FF7125] text-[22px] md:text-[32px] font-bold">
						{priceToString(grandTotal)}
					</div>
				</div>
				<div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-stretch">
					<div className="text-[#64302D] text-[20px] md:text-[22px] font-medium">
						{name || "-"}
					</div>
					<div className="text-[#64302D] text-[20px] md:text-[22px] font-medium">
						{price ? priceToString(price) : priceToString(0)}
					</div>
				</div>
				<div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-stretch">
					<div className="text-[#64302D] text-[20px] md:text-[22px] font-medium">
						Discount Amount
					</div>
					{/* <div className="text-[#64302D] text-[20px] md:text-[22px] font-medium">
						{voucherValidateQuery.data?.status === 200 &&
						voucherValidateQuery.data.data.data !== null
							? priceToString(voucherValidateQuery.data.data.data.discount)
							: priceToString(0)}
					</div> */}
				</div>
			</div>
			<form
				method="post"
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<input type="hidden" name="ticket_id" value={id || ""} />
				{/* {voucherValidateQuery.data?.status === 200 &&
				voucherValidateQuery.data.data.data !== null ? (
					<input
						type="hidden"
						name="voucher_id"
						value={voucherValidateQuery.data.data.data.id}
					/>
				) : (
					<></>
				)} */}
				<CheckoutTicketButton isLoading={state === "submitting"} />
			</form>
		</div>
	);
};
