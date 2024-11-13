import { Button } from "~/components/ui/button";
import { UserLoginIcon } from "./UserLoginIcon";

export const LoginButton = () => {
	return (
		<Button className="flex gap-1 bg-[#64302D] text-white font-bold border border-white rounded-full">
			<span>Login</span>
			<UserLoginIcon />
		</Button>
	);
};
