import { Hero } from "~/components/routes/_index/Hero/Hero";
import { Layout } from "../components/shared/Layout";
import { BigImage } from "~/components/routes/_index/BigImage/BigImage";
import { Sponsorship } from "~/components/routes/_index/Sponsorship/Sponsorship";

export default function Index() {
	return (
		<Layout isLogin={false}>
			<div className="absolute left-0 top-0 -z-10 w-full h-[600px] md:h-[900px] bg-[#602D2B]"></div>
			<div className="pt-10 pb-10 px-4 sm:px-20">
				<Hero />
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20">
				<BigImage />
			</div>
			<div className="pt-20 pb-20 px-4 sm:px-20">
				<Sponsorship />
			</div>
		</Layout>
	);
}
