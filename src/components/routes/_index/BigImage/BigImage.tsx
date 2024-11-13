import prambanan from "./Prambanan.png";

export const BigImage = () => {
	return (
		<div className="relative w-full hidden sm:flex flex-col justify-center">
			<img src={prambanan} alt="Candi Pramabanan" />
			<div className="absolute bottom-8 w-full flex flex-col items-center text-center text-white">
				<h3 className="text-center text-5xl font-bold pb-4">PyCon APAC 2024</h3>
				<p className="pb-2 text-base">
					Python Conference Asia Pacific or PyCon APAC is an annual conference
					where Python
				</p>
				<p className="text-base">
					enthusiasts share their knowledge with the others, especially in Asia
					Pacific region.
				</p>
			</div>
		</div>
	);
};
