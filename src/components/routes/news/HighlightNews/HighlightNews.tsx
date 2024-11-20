import { Link } from "react-router-dom";

export const HighlightNews = ({
	title,
	link,
	description,
	publishDate: createdDate,
	tags,
}: {
	title: string;
	link: string;
	description: string;
	publishDate: Date;
	tags: string[];
}) => {
	return (
		<div className="w-full flex flex-col-reverse lg:flex-row gap-8">
			<div className="flex flex-col gap-6 basis-1/2">
				<Link to={link}>
					<h3 className="font-semibold text-[44px] text-[#333333] leading-[55.44px] hover:cursor-pointer hover:underline">
						{title}
					</h3>
				</Link>
				<p className="text-[18px] text-[#333333] leading-[26px]">
					{description}
				</p>
				<div className="flex gap-2">
					<span className="font-bold text-[12px] text-[#333333]">
						{createdDate.getDate()}-{createdDate.getMonth()}-
						{createdDate.getFullYear()}
					</span>
					{tags.map((x) => (
						<>
							<span
								key={`${x}|`}
								className="font-bold text-[12px] text-[#333333]"
							>
								|
							</span>
							<span key={x} className="font-bold text-[12px] text-[#333333]">
								{x}
							</span>
						</>
					))}
				</div>
			</div>
			<div className="lg:basis-1/2 h-[350px] bg-[#333333] rounded-lg"></div>
		</div>
	);
};
