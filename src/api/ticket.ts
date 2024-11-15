import { z } from "zod";

const getAllTicketSchema = z.object({
	status: z.literal(200),
	data: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
			price: z.number(),
			description: z.string(),
			early_bird: z.union([z.literal(0), z.literal(1)]),
			ticket_features: z.array(
				z.object({
					id: z.string(),
					feature: z.string(),
				}),
			),
		}),
	),
});

export const getAllTicketApi = async () => {
	const data = {
		status: 200,
		data: [
			{
				id: "70c35f57-6490-46a9-a73b-2301d32a355e",
				name: "General In Person",
				price: 300000,
				description:
					"This ticket will get both online and in person access to this event.",
				early_bird: 0,
				ticket_features: [
					{
						id: "038aaf2d-e673-4381-bf97-5dd0aaae9153",
						feature: "Lunch and Snacks.",
					},
					{
						id: "6fbc5807-29ad-4572-8112-9e6c7533bc73",
						feature: "Online and in person access.",
					},
					{
						id: "852e1d2c-41ee-4eb9-b43c-8f5f79983ed2",
						feature: "Exclusive PyCon APAC merchandise.",
					},
				],
			},
			{
				id: "7e6ec501-1c3e-4de2-a06e-b369a51f7ad7",
				name: "Student In Person",
				price: 250000,
				description:
					"This ticket will get both online and in person access to this event. This ticket is only available to students (includes school or university).",
				early_bird: 0,
				ticket_features: [
					{
						id: "69a4215d-d855-4e03-a187-5cc1b0cbf0a2",
						feature: "Lunch and Snacks.",
					},
					{
						id: "bb7e3565-e930-4e00-9118-b38b55bd8595",
						feature: "Online and in person access.",
					},
					{
						id: "e8ad9b1b-90a7-4619-904c-ee0cb0eea40b",
						feature: "Exclusive PyCon APAC merchandise.",
					},
				],
			},
			{
				id: "3f529a97-1ee7-45e5-93e3-cef140a7662f",
				name: "Patron",
				price: 1500000,
				description:
					"Be a patron by supporting this event. Your name will be listed on Patron Section. This ticket will get both online and in person access to this event.",
				early_bird: 0,
				ticket_features: [
					{
						id: "712b8d51-5105-480a-b256-5dde8c56cdcc",
						feature: "Lunch and Snacks.",
					},
					{
						id: "7882ca39-789b-4a68-bfa4-4b87b639c3ea",
						feature: "Online and in person access.",
					},
					{
						id: "fa573be3-9322-433f-9a63-801ccf38dffa",
						feature: "Exclusive PyCon APAC merchandise.",
					},
				],
			},
			{
				id: "b039a73d-0737-48c1-92b6-76a69ce71cc8",
				name: "General Online",
				price: 150000,
				description: "This ticket includes online access to our event online.",
				early_bird: 0,
				ticket_features: [
					{
						id: "8396d16f-3ad0-4278-a0ac-465931bfdfe2",
						feature: "Online access only.",
					},
				],
			},
			{
				id: "a19f66ea-84c8-4e85-8eee-2e52dee634bd",
				name: "Student Online",
				price: 100000,
				description:
					"This ticket includes online access to our event online. This ticket is only available to students (includes school or university).",
				early_bird: 0,
				ticket_features: [
					{
						id: "ec44b583-cf34-418d-9e3a-a82f2d3538b2",
						feature: "Online access only.",
					},
				],
			},
			{
				id: "b40a0af2-eace-450d-a8f2-68a9088c02fe",
				name: "General In Person",
				price: 250000,
				description:
					"This ticket will get both online and in person access to this event.",
				early_bird: 1,
				ticket_features: [
					{
						id: "139b8823-88ef-4fc3-b958-24a7d93d82de",
						feature: "Lunch and Snacks.",
					},
					{
						id: "56765dba-40d5-4a7b-bbeb-71b3431fb804",
						feature: "Online and in person access.",
					},
					{
						id: "c0043788-0ece-48fc-bee3-fbe47c7697bf",
						feature: "Exclusive PyCon APAC merchandise.",
					},
				],
			},
			{
				id: "f5581c6e-6846-46e2-b221-748da73afe1a",
				name: "Student In Person",
				price: 200000,
				description:
					"This ticket will get both online and in person access to this event. This ticket is only available to students (includes school or university).",
				early_bird: 1,
				ticket_features: [
					{
						id: "542c794f-6d1c-4a66-aa10-2c7237cb19ad",
						feature: "Lunch and Snacks.",
					},
					{
						id: "8b8d6b7e-608c-41bc-b234-7d1a971719d3",
						feature: "Online and in person access.",
					},
					{
						id: "a1bec4aa-473b-494b-b291-cc131502569c",
						feature: "Exclusive PyCon APAC merchandise.",
					},
				],
			},
		],
	};
	return getAllTicketSchema.parse(data);
};
