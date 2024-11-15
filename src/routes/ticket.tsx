import { useMemo, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAllTicketApi } from "~/api/ticket";
import { CheckoutTicket } from "~/components/routes/ticket/CheckoutTicket/CheckoutTicket";
import { TicketGroup } from "~/components/routes/ticket/TicketGroup";
import { TrapeziumBackground } from "~/components/routes/ticket/TrapeziumBackground";
import { Layout } from "~/components/shared/Layout";

export async function loader() {
	const getAllTicketResponse = await getAllTicketApi();
	return { getAllTicketResponse };
}

export default function TicketPage() {
	const { getAllTicketResponse } = useLoaderData() as Awaited<
		ReturnType<typeof loader>
	>;
	const [selectedTicketId, setSelectedTicketId] = useState(
		getAllTicketResponse.data.length > 0 ? getAllTicketResponse.data[0].id : "",
	);

	const selectedTicket = useMemo(() => {
		const res = getAllTicketResponse.data.filter(
			(x) => x.id === selectedTicketId,
		);
		if (res.length === 0) {
			return null;
		}

		return res[0];
	}, [selectedTicketId, getAllTicketResponse]);

	return (
		<Layout isLogin={false}>
			<TrapeziumBackground />
			<div className="w-full h-[300px] grid place-items-center">
				<div className="flex flex-col justify-center gap-6 text-center text-white">
					<h1 className="text-6xl font-bold">Buy Ticket</h1>
					<p className="text-lg text-center max-w-[500px]">
						Ticket includes for all events. Conference days on October 26th -
						27th and Workshop day on October 25th (Separate registration
						required for ticket holders due to limited seats).
					</p>
				</div>
			</div>
			<TicketGroup
				selectedId={selectedTicketId}
				onChangeSelected={(id) => {
					setSelectedTicketId(id);
				}}
				ticketArray={getAllTicketResponse.data.map((x) => ({
					id: x.id,
					title: x.name,
					price: x.price,
					isEarlyBird: x.early_bird === 1,
					description: x.description,
					includes: x.ticket_features.map((y) => y.feature),
				}))}
			/>
			<div className="px-5 md:px-20 p-20">
				<CheckoutTicket
					id={selectedTicketId}
					name={selectedTicket?.name || null}
					price={selectedTicket?.price || null}
				/>
			</div>
		</Layout>
	);
}
