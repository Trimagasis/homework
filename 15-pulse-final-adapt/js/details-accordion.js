const DETAILS_SELECTOR = ".our-fitness-center__details";
const CONTENT_SELECTOR = ".our-fitness-center__content";

const prefersReducedMotion = () =>
	window.matchMedia &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setStateOpen = (details, isOpen) => {
	if (isOpen) {
		details.classList.add("is-open");
	} else {
		details.classList.remove("is-open");
	}
};

const animateOpen = (details, content, allDetails) => {
	if (prefersReducedMotion()) {
		details.open = true;
		setStateOpen(details, true);
		content.style.height = "";
		content.style.overflow = "";
		return;
	}

	if (content._wa) {
		content._wa.cancel();
	}

	allDetails.forEach((item) => {
		if (item !== details) {
			const itemContent = item.querySelector(CONTENT_SELECTOR);
			if (itemContent) {
				animateClose(item, itemContent);
			}
		}
	});

	details.open = true;
	setStateOpen(details, true);
	const endHeight = content.scrollHeight;

	content.style.overflow = "hidden";
	content.style.height = "0px";

	content._wa = content.animate(
		[{ height: "0px" }, { height: `${endHeight}px` }],
		{ duration: 400, easing: "ease" },
	);

	content._wa.onfinish = () => {
		content.style.height = "";
		content.style.overflow = "";
		content._wa = null;
	};
};

const animateClose = (details, content) => {
	if (prefersReducedMotion()) {
		content.style.height = "";
		content.style.overflow = "";
		details.open = false;
		setStateOpen(details, false);
		return;
	}

	if (content._wa) {
		content._wa.cancel();
	}

	setStateOpen(details, false);
	const startHeight = content.scrollHeight;
	content.style.overflow = "hidden";

	content._wa = content.animate(
		[{ height: `${startHeight}px` }, { height: "0px" }],
		{ duration: 400, easing: "ease" },
	);

	content._wa.onfinish = () => {
		details.open = false;
		content.style.height = "";
		content.style.overflow = "";
		content._wa = null;
	};
};

const initDetailsAccordion = () => {
	const detailsList = document.querySelectorAll(DETAILS_SELECTOR);

	detailsList.forEach((details) => {
		const summary = details.querySelector("summary");
		const content = details.querySelector(CONTENT_SELECTOR);

		if (!summary || !content) {
			return;
		}

		summary.addEventListener("click", (event) => {
			event.preventDefault();
			if (details.open) {
				animateClose(details, content);
			} else {
				animateOpen(details, content, detailsList);
			}
		});
	});
};

export default initDetailsAccordion;
