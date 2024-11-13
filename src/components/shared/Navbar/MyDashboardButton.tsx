import { Button } from "~/components/ui/button";
import { UserRegisterIcon } from "./UserRegisterIcon";

export const MyDashboardButton = () => {
	return (
		<Button className="flex gap-1 text-[#351615] bg-white font-bold rounded-full">
			<span>My Dashboard</span>
			<UserRegisterIcon />
		</Button>
	);
};
