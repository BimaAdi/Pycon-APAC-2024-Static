import Python from "./python software foundation.png";
import Jublia from "./jublia.png";
import Hennge from "./hennge_logo_black_vertical.png";
import ChuraData from "./churadata.png";
import JetBrains from "./jetbrains.png";
import Qiscus from "./qiscus.png";

export const Sponsorship = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center gap-10">
			<p className="text-[#64302D] text-[16px] sm:text-[26px] text-center font-semibold">
				Thank you to the Sponsors for supporting our event
			</p>
			<div className="flex flex-col items-center gap-8">
				<img height="120px" src={Python} alt="python software foundation" />
				<img height="100px" src={Jublia} alt="Jublia" />
				<a href="https://recruit.hennge.com/en/">
					<img height="80px" src={Hennge} alt="HENNGE" />
				</a>
				<img height="80px" src={ChuraData} alt="Churadata" />
				<img height="60px" src={JetBrains} alt="JetBrains" />
				<img height="60px" src={Qiscus} alt="Qiscus" />
			</div>
			{/* <div className="flex items-center gap-4">
				<p className="text-[#64302D] text-[16px] sm:text-[26px] text-center font-bold">
					Support By
				</p>
				<img src={Python} alt="python software foundation" />
			</div> */}
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSckkgXMyjHHUUuq8QdwPUEcwfoUuYrZEmAzErs2xo5YzbiufQ/viewform"
				className="text-[#64302D] text-[16px] sm:text-[26px] text-center font-bold underline hover:cursor-pointer"
			>
				We are open for Sponsor!
			</a>
			<div className="border border-slate-200  w-10/12"></div>
		</div>
	);
};
