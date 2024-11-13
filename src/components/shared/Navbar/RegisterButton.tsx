import { Button } from "~/components/ui/button";
import { UserRegisterIcon } from "./UserRegisterIcon";

export const RegisterButton = () => {
	return (
		<Button className="flex gap-1 text-[#351615] bg-white font-bold rounded-full">
			<span>Register</span>
			<UserRegisterIcon />
		</Button>
	);
};
