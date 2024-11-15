import { useMemo } from "react";
import { Ticket } from "./Ticket/Ticket";
import { priceToString } from "./utils";

type ticketItem = {
	id: string;
	isEarlyBird: boolean;
	title: string;
	price: number;
	description: string;
	includes: string[];
};

/**
 * format ticket array into mutidimensional array for flexbox
 * with number of each item in array maximum NUM_ITEM_IN_ROW
 * @param ticketArray ticketItem[]
 * @returns ticketItem[][]
 *
 * @example
 * generateRow([1, 2, 3, 4, 5]) // [[1, 2, 3],[4,5]]
 *
 * * @example
 * generateRow([1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3],[4, 5, 6], [7]]
 */
const generateRowXL = (ticketArray: ticketItem[]): ticketItem[][] => {
	const NUM_ITEM_IN_ROW = 3;
	const res = [];
	for (let i = 0; i < ticketArray.length; i += NUM_ITEM_IN_ROW) {
		if (i + NUM_ITEM_IN_ROW > ticketArray.length) {
			res.push(ticketArray.slice(i, ticketArray.length));
		} else {
			res.push(ticketArray.slice(i, i + NUM_ITEM_IN_ROW));
		}
	}
	return res;
};

/**
 * format ticket array into mutidimensional array for flexbox
 * with number of each item in array maximum NUM_ITEM_IN_ROW
 * @param ticketArray ticketItem[]
 * @returns ticketItem[][]
 *
 * @example
 * generateRow([1, 2, 3, 4, 5]) // [[1, 2, 3],[4,5]]
 *
 * * @example
 * generateRow([1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3],[4, 5, 6], [7]]
 */
const generateRowMD = (ticketArray: ticketItem[]): ticketItem[][] => {
	const NUM_ITEM_IN_ROW = 2;
	const res = [];
	for (let i = 0; i < ticketArray.length; i += NUM_ITEM_IN_ROW) {
		if (i + NUM_ITEM_IN_ROW > ticketArray.length) {
			res.push(ticketArray.slice(i, ticketArray.length));
		} else {
			res.push(ticketArray.slice(i, i + NUM_ITEM_IN_ROW));
		}
	}
	return res;
};

/**
 * format ticket array into mutidimensional array for flexbox
 * with number of each item in array maximum NUM_ITEM_IN_ROW
 * @param ticketArray ticketItem[]
 * @returns ticketItem[][]
 *
 * @example
 * generateRow([1, 2, 3, 4, 5]) // [[1, 2, 3],[4,5]]
 *
 * * @example
 * generateRow([1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3],[4, 5, 6], [7]]
 */
const generateRowSM = (ticketArray: ticketItem[]): ticketItem[][] => {
	const NUM_ITEM_IN_ROW = 1;
	const res = [];
	for (let i = 0; i < ticketArray.length; i += NUM_ITEM_IN_ROW) {
		if (i + NUM_ITEM_IN_ROW > ticketArray.length) {
			res.push(ticketArray.slice(i, ticketArray.length));
		} else {
			res.push(ticketArray.slice(i, i + NUM_ITEM_IN_ROW));
		}
	}
	return res;
};

export const TicketGroup = ({
	ticketArray,
	selectedId,
	onChangeSelected,
}: {
	ticketArray: ticketItem[];
	selectedId: string;
	onChangeSelected: (selectedId: string) => void;
}) => {
	const earlyBirdTicketSM = useMemo(
		() => generateRowSM(ticketArray.filter((x) => x.isEarlyBird)),
		[ticketArray],
	);
	const nonEarlyBirdTicketSM = useMemo(
		() => generateRowSM(ticketArray.filter((x) => !x.isEarlyBird)),
		[ticketArray],
	);

	const earlyBirdTicketMD = useMemo(
		() => generateRowMD(ticketArray.filter((x) => x.isEarlyBird)),
		[ticketArray],
	);
	const nonEarlyBirdTicketMD = useMemo(
		() => generateRowMD(ticketArray.filter((x) => !x.isEarlyBird)),
		[ticketArray],
	);

	const earlyBirdTicketXL = useMemo(
		() => generateRowXL(ticketArray.filter((x) => x.isEarlyBird)),
		[ticketArray],
	);
	const nonEarlyBirdTicketXL = useMemo(
		() => generateRowXL(ticketArray.filter((x) => !x.isEarlyBird)),
		[ticketArray],
	);

	return (
		<>
			<div className="hidden ticketG1BreakPoint:block">
				{earlyBirdTicketSM.map((row, index) => (
					<div
						key={index}
						className="flex justify-center items-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								flag="Early Bird"
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								isSoldOut={true}
								onClick={() => {
									// onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
				{nonEarlyBirdTicketSM.map((row, index) => (
					<div
						key={index}
						className="flex justify-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								onClick={() => {
									onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
			</div>
			<div className="hidden ticketG2BreakPoint:block">
				{earlyBirdTicketMD.map((row, index) => (
					<div
						key={index}
						className="flex justify-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								flag="Early Bird"
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								isSoldOut={true}
								onClick={() => {
									// onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
				{nonEarlyBirdTicketMD.map((row, index) => (
					<div
						key={index}
						className="flex justify-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								onClick={() => {
									onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
			</div>
			<div className="hidden ticketG3BreakPoint:block">
				{earlyBirdTicketXL.map((row, index) => (
					<div
						key={index}
						className="flex justify-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								flag="Early Bird"
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								isSoldOut={true}
								onClick={() => {
									// onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
				{nonEarlyBirdTicketXL.map((row, index) => (
					<div
						key={index}
						className="flex justify-center gap-8 pt-5 pb-5 px-20"
					>
						{row.map((item) => (
							<Ticket
								key={item.id}
								borderColor={selectedId === item.id ? "orange" : "gray"}
								title={item.title}
								price={priceToString(item.price)}
								description={item.description}
								includes={item.includes}
								onClick={() => {
									onChangeSelected(item.id);
								}}
							/>
						))}
					</div>
				))}
			</div>
		</>
	);
};
