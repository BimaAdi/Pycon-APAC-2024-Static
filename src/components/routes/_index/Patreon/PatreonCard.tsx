import { GithubIcon } from "./GithubIcon";
import { XIcon } from "./XIcon";

export const PatreonCard = ({ name, job }: { name: string; job: string }) => {
	return (
		<div className="w-[392px] h-[486px] flex flex-col items-center justify-around bg-white rounded-3xl">
			<div className="w-[340px] h-[340px] bg-black rounded-3xl"></div>
			<div className="w-[340px] flex justify-between items-center">
				<div>
					<p className="font-semibold text-2xl">{name}</p>
					<p className="text-[#9E9E9E] text-xl">{job}</p>
				</div>
				<div className="flex gap-5">
					<GithubIcon />
					<XIcon />
				</div>
			</div>
		</div>
	);
};
