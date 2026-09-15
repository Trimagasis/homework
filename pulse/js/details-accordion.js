const initDetailsAccordion = () => {
	const detailsList = document.querySelectorAll(".our-fitness-center__details");

	const closeDetails = (currentDetails) => {
		const currentContent = currentDetails.querySelector(
			".our-fitness-center__content",
		);

		if (!currentContent) return;

		const contentHeight = currentContent.scrollHeight;

		const animation = currentContent.animate(
			[{ height: `${contentHeight}px` }, { height: "0px" }],
			{
				duration: 400,
				easing: "ease",
			},
		);

		animation.onfinish = () => {
			currentDetails.open = false;
		};
	};
	detailsList.forEach((details) => {
		const summary = details.querySelector(".our-fitness-center__summary");
		const content = details.querySelector(".our-fitness-center__content");
		if (!summary || !content) return;

		summary.addEventListener("click", (event) => {
			event.preventDefault();
			if (details.open) {
				closeDetails(details);
			} else {
				details.open = true;
				const contentHeight = content.scrollHeight;
				content.animate([{ height: "0px" }, { height: `${contentHeight}px` }], {
					duration: 400,
					easing: "ease",
				});
			}
		});

		details.addEventListener("toggle", () => {
			details.classList.toggle("is-open", details.open);

			if (!details.open) return;

			detailsList.forEach((otherDetails) => {
				if (otherDetails !== details && otherDetails.open)
					closeDetails(otherDetails);
			});
		});
	});
};
export default initDetailsAccordion;
