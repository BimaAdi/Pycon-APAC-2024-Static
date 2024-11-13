export const SpeakerCard = ({
	name,
	description,
}: { name: string; description: string }) => {
	return (
		<div className="w-[434px] min-h-[792px] flex flex-col items-center rounded-t-full rounded-b-full bg-[#E8D8CF] px-8">
			<div className="rounded-t-full rounded-b-full w-[360px] min-h-[510px] bg-gray-500 mt-14"></div>
			<div className="flex flex-col items-center mt-10">
				<p className="text-xl font-bold text-[#42449C]">{name}</p>
				<p className="text-lg text-[#42449C] text-center mt-2">{description}</p>
			</div>
		</div>
	);
};
