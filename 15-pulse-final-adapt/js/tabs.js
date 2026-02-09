try {
	const tabsBlocks = document.querySelectorAll("[data-tabs]");

	tabsBlocks.forEach((tabsBlock) => {
		const tabs = Array.from(tabsBlock.querySelectorAll('[role="tab"]'));
		const panels = Array.from(
			tabsBlock.querySelectorAll('[role="tabpanel"]'),
		);

		if (!tabs.length || !panels.length) {
			return;
		}

		const activateTab = (tab) => {
			const targetId = tab.getAttribute("aria-controls");
			const targetPanel = tabsBlock.querySelector(`#${targetId}`);

			tabs.forEach((button) => {
				const isActive = button === tab;
				button.classList.toggle("is-active", isActive);
				button.setAttribute("aria-selected", String(isActive));
			});

			panels.forEach((panel) => {
				const isActive = panel === targetPanel;
				panel.classList.toggle("is-active", isActive);
				panel.setAttribute("aria-hidden", String(!isActive));
				panel.toggleAttribute("hidden", !isActive);
			});
		};

		const initialTab =
			tabs.find(
				(tab) =>
					tab.classList.contains("is-active") ||
					tab.getAttribute("aria-selected") === "true",
			) || tabs[0];
		activateTab(initialTab);

		tabs.forEach((tab) => {
			tab.addEventListener("click", () => activateTab(tab));
		});
	});
} catch (error) {
	console.error(error);
}
