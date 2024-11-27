export const ReportingCard = () => {
	return (
		<div className="max-w-[1037px] rounded-[32px] border border-[#D2D2D2]">
			<div className="bg-[#733635] rounded-t-[32px] py-[8px] px-[22px] font-bold text-[24px] text-white text-center leading-[32px]">
				Reporting and Rule Enforcement
			</div>
			<div className="p-[32px] text-[#2E2D2C] text-[18px] text-justify">
				<p className="pt-[20px]">
					If a participant engages in harassing behavior, the conference
					organizers may take any action they deem appropriate, including
					warning the offender or expulsion from the conference with no refund.
				</p>
				<p className="py-[20px]">
					Conference staff will be happy to help participants contact
					hotel/venue security or local law enforcement, provide escorts, or
					otherwise assist those experiencing harassment to feel safe for the
					duration of the conference. We value your attendance.
				</p>
				<hr />
				<p className="pt-[20px] font-bold">
					All participants should follow instructions from the meeting staff
				</p>
				<p className="pt-[20px]">
					Examples of instructions from staff include:
				</p>
				<ul className="list-disc pt-[20px] pl-[20px]">
					<li>Instructions to ensure physical and psychological safety</li>
					<li>
						Fire hazard, earthquake, volcanic eruption and other natural
						disasters
					</li>
					<li>Other Force Majeure Responses</li>
				</ul>
				<p className="pt-[20px]">
					In order to ensure the above, the meeting staff may request the
					participants to leave the event if deemed necessary. Participants need
					to follow it. In this case, we will not refund the participation fee
					that has already been paid.
				</p>
				<p className="pt-[20px]">
					Attendees should observe this Code of Conduct in the conference room,
					workshop venue, social events associated with the conference,
					conference website, and applications used.
				</p>
			</div>
		</div>
	);
};
