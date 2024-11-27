export const OurStandardCard = () => {
	return (
		<div className="max-w-[1037px] rounded-[32px] border border-[#D2D2D2]">
			<div className="bg-[#272D4E] rounded-t-[32px] py-[8px] px-[22px] font-bold text-[24px] text-white text-center leading-[32px]">
				Our Standards
			</div>
			<div className="p-[32px] text-[#2E2D2C] text-[18px] text-justify">
				<p>
					<span className="font-bold">Pycon APAC ID</span> is organized with the
					utmost respect by the host country and city to ensure every member of{" "}
					<span className="font-bold">Python community</span> has positive
					experience. The Python community is dedicated to providing a positive
					experience for everyone, regardless of age, gender, faith, and
					physical appearance.
				</p>
				<br />
				<hr />
				<p className="pt-[20px] font-bold">
					Examples of behavior that contributes to creating a positive
					environment include, but not limited to:
				</p>
				<div className="w-full md:flex md:gap-4 py-[20px]">
					<ul className="md:basis-1/2 list-disc pl-[20px]">
						<li>Being kind to others</li>
						<li>Using welcoming and inclusive language</li>
						<li>Showing empathy towards other community members</li>
					</ul>
					<ul className="md:basis-1/2 list-disc pl-[20px]">
						<li>Behaving professionally</li>
						<li>Being respectful of differing viewpoints and experiences</li>
					</ul>
				</div>
				<hr />
				<p className="pt-[20px] font-bold">
					Examples of unacceptable behavior by participants include, but not
					limited to:
				</p>
				<div className="w-full md:flex md:gap-4 py-[20px]">
					<ul className="md:basis-1/2 list-disc pl-[20px]">
						<li>Harassment of conference participants in any form</li>
						<li>Violent threats or language directed against another person</li>
						<li>
							Sexist, racist, homophobic, transphobic, ableist, or exclusionary
							jokes
						</li>
					</ul>
					<ul className="md:basis-1/2 list-disc pl-[20px]">
						<li>Deliberate intimidation, stalking, or following</li>
						<li>
							Sexual language and imagery in any conference venue, including
							talks
						</li>
						<li>
							Other conduct that is inappropriate for a professional audience
							including people of many different backgrounds
						</li>
					</ul>
				</div>
				<p>
					Participants asked to stop any inappropriate behavior are expected to
					comply immediately. If a participant engages in behavior that violates
					this code of conduct, the conference organizers may take any action
					they deem appropriate, including warning the offender or expulsion
					from the conference with no refund.
				</p>
				<br />
				<hr />
				<p className="pt-[20px] font-bold">For Sponsors and Partners</p>
				<p className="pt-[20px]">
					<span className="font-bold">Sponsors and Partners</span> are also
					subject to the anti-harassment policy. In particular, sponsors should
					not use sexualised images, activities, or other material. Booth staff
					(including volunteers) should not use sexualised
					clothing/uniforms/costumes, or otherwise create a sexualised
					environment.
				</p>
			</div>
		</div>
	);
};
