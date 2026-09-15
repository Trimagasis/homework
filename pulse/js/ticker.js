const initTicker = (selector = "[data-ticker]") => {
	const ticker = document.querySelector(selector);
	if (!ticker) return;
	const track = ticker.querySelector(".ticker__track");
	if (!track) return;

	const clones = track.querySelectorAll("[data-clone]");
	clones.forEach((clone) => {
		clone.remove();
	});

	const trackChildren = track.children;
	const baseGroups = Array.from(trackChildren);
	if (baseGroups.length === 0) return;

	let baseCycleWidth = 0;
	baseGroups.forEach((baseGroup) => {
		const elementWidth = baseGroup.getBoundingClientRect().width;
		baseCycleWidth += elementWidth;
		const baseGroupCopy = baseGroup.cloneNode(true);
		baseGroupCopy.setAttribute("data-clone", "true");
		track.append(baseGroupCopy);
	});

	track.style.setProperty("--ticker-shift", `${baseCycleWidth}px`);
};
export default initTicker;
