const initTabs = () => {
	const tabsBlocks = document.querySelectorAll("[data-tabs]");
	tabsBlocks.forEach((tabsBlocks) => {
		const tabs = tabsBlocks.querySelectorAll('[role="tab"]');
		const panels = tabsBlocks.querySelectorAll('[role="tabpanel"]');

		const activateTab = (selectTab) => {
			if (!selectTab) return;

			const panelId = selectTab.getAttribute("aria-controls");
			const selectPanel = tabsBlocks.querySelector(`#${panelId}`);
			if (!selectPanel) return;

			tabs.forEach((tab) => {
				tab.classList.remove("is-active");
				tab.setAttribute("aria-selected", "false");
			});
			selectTab.classList.add("is-active");
			selectTab.setAttribute("aria-selected", "true");

			panels.forEach((panel) => {
				panel.hidden = true;
				panel.classList.remove("is-active");
				panel.setAttribute("aria-hidden", "true");
			});
			selectPanel.hidden = false;
			selectPanel.classList.add("is-active");
			selectPanel.setAttribute("aria-hidden", "false");
		};

		tabsBlocks.addEventListener("click", (event) => {
			const selectTab = event.target.closest(`[role="tab"]`);
			activateTab(selectTab);
		});

		let initialTab = tabsBlocks.querySelector(
			'[role="tab"][aria-selected="true"]',
		);

		if (!initialTab) {
			initialTab = tabs[0];
		}

		activateTab(initialTab);
	});
};
export default initTabs;
