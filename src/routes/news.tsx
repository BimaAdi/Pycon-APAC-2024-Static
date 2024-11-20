import { HighlightNews } from "~/components/routes/news/HighlightNews/HighlightNews";
import { listNewsMetadata } from "~/components/routes/news/listNewsMatadata";
import { Layout } from "~/components/shared/Layout";
import { PREFIX } from "~/settings";

export default function NewsPage() {
	return (
		<Layout isLogin={false}>
			<div className="py-20 pb-10 px-4 sm:px-20">
				<div className="w-full flex flex-col items-center">
					<h1 className="text-center font-bold text-[60px] text-[#64302D]">
						News Page
					</h1>
					<h2 className="text-center text-[34px] text-[#333333]">
						All news that related to event
					</h2>
				</div>
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20">
				<HighlightNews
					title={listNewsMetadata.title}
					link={`${PREFIX}/news/${listNewsMetadata.link}`}
					description={listNewsMetadata.description}
					publishDate={listNewsMetadata.publishDate}
					tags={listNewsMetadata.tags}
				/>
			</div>
		</Layout>
	);
}
