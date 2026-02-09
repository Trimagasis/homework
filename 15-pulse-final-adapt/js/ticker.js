export default function initTicker(selector = "[data-ticker]") {
	const ticker = document.querySelector(selector);
	if (!ticker) return;

	const track = ticker.querySelector(".ticker__track");
	if (!track) return;

	track.querySelectorAll("[data-clone]").forEach((node) => node.remove());

	const baseGroups = Array.from(track.children);
	if (baseGroups.length === 0) return;

	const containerWidth = ticker.clientWidth;

	// ширина базового цикла — сумма исходных групп
	const baseCycleWidth = baseGroups.reduce((acc, group) => {
		return acc + group.getBoundingClientRect().width;
	}, 0);

	// на узких экранах базовый цикл может быть меньше контейнера
	// поэтому наращиваем цикл до ширины контейнера
	let cycleWidth = baseCycleWidth;
	while (cycleWidth < containerWidth) {
		baseGroups.forEach((group) => {
			const clone = group.cloneNode(true);
			clone.setAttribute("data-clone", "true");
			track.appendChild(clone);
		});
		cycleWidth += baseCycleWidth;
	}

	track.style.setProperty("--ticker-shift", `${cycleWidth}px`);

	let trackWidth = track.scrollWidth;

	while (trackWidth < cycleWidth * 2) {
		const cycleNodes = Array.from(track.children);
		cycleNodes.forEach((node) => {
			const clone = node.cloneNode(true);
			clone.setAttribute("data-clone", "true");
			track.appendChild(clone);
		});
		trackWidth = track.scrollWidth;
	}
}
