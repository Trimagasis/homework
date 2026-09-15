import "./fslightbox.js";
import initBurgerMenu from "./burger.js";
import initTabs from "./tabs.js";
import initDetailsAccordion from "./details-accordion.js";
import initTicker from "./ticker.js";
import initSwiper from "./swiper.js";
import initSignupModal from "./modal.js";
import initSignupForm from "./signup-form.js";

initBurgerMenu();
initTabs();
initDetailsAccordion();
initSwiper();
initSignupModal();
initSignupForm();

document.fonts.ready.then(() => {
	initTicker();

	let resizeTimer;

	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			initTicker();
		}, 150);
	});
});
