import BurgerMenu from "./burger.js";

try {
	new BurgerMenu({
		BURGER: "burger",
		BURGER_OPEN: "burger--open",
		HEADER_MENU: "header__menu",
		HEADER_MENU_OPEN: "header__menu--open",
		lABEL: {
			OPEN: "Открыть меню",
			CLOSE: "Закрыть меню",
		},
		PAGE_BODY: "page__body",
		PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
		MENU_LINK: "menu__link",
		BREAKPOINT: 1100,
		MAIN: "main",
	});
} catch (error) {
	console.error(error);
}

try {
	const sliderBreakpoint = 876;
	let wheySlider = null;

	const initWheySlider = () => {
		wheySlider = new Swiper(".whey__slider", {
			loop: true,
			speed: 700,
			direction: "vertical",
			initialSlide: 2,
			slidesPerView: 1,
			spaceBetween: 24,
			pagination: {
				el: ".whey__pagination",
				clickable: true,
				renderBullet: (index, className) =>
					`<span class="${className}" aria-label="${index + 1}"></span>`,
			},
		});
	};

	const updateWheySlider = () => {
		if (window.innerWidth <= sliderBreakpoint) {
			if (wheySlider) {
				wheySlider.destroy(true, true);
				wheySlider = null;
			}
			return;
		}

		if (!wheySlider) {
			initWheySlider();
		}
	};

	updateWheySlider();
	window.addEventListener("resize", updateWheySlider);
} catch (error) {
	console.error(error);
}
