import { NotFound } from "~/components/routes/$/NotFound";
import { Layout } from "~/components/shared/Layout";

export default function NotFoundPage() {
	return (
		<Layout isLogin={false}>
			<div className="m-auto pt-10 pb-20 px-4 sm:px-20 max-w-[748px]">
				<NotFound />
			</div>
		</Layout>
	);
}
