import { COCInquiriesCard } from "~/components/routes/code-of-conduct/COCInquiriesCard";
import { Hero } from "~/components/routes/code-of-conduct/Hero";
import { OurStandardCard } from "~/components/routes/code-of-conduct/OurStandardCard";
import { ReportingCard } from "~/components/routes/code-of-conduct/ReportingCard";
import { WeaponPolicyCard } from "~/components/routes/code-of-conduct/WeaponPolicyCard";
import { Layout } from "~/components/shared/Layout";

export default function CodeOfConductPage() {
	return (
		<Layout isLogin={false}>
			<div className="pt-10 pb-10 px-4 sm:px-20">
				<Hero />
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20 flex justify-center">
				<OurStandardCard />
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20 flex justify-center">
				<WeaponPolicyCard />
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20 flex justify-center">
				<ReportingCard />
			</div>
			<div className="pt-10 pb-10 px-4 sm:px-20 flex justify-center">
				<COCInquiriesCard />
			</div>
		</Layout>
	);
}
