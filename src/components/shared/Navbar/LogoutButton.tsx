import { Button } from "~/components/ui/button";
import { UserLoginIcon } from "./UserLoginIcon";

export const LogoutButton = ({ onClick }: { onClick: () => void }) => {
	return (
		<Button
			onClick={onClick}
			className="flex gap-1 bg-[#64302D] text-white font-bold border border-white rounded-full"
		>
			<span>Logout</span>
			<UserLoginIcon />
		</Button>
	);
};
