const initBurgerMenu = () => {
	const burgerButton = document.querySelector(".burger");
	const burgerMenu = document.querySelector(".header__menu");
	const pageBody = document.querySelector(".page__body");

	burgerButton.addEventListener("click", () => {
		const isOpen = burgerButton.classList.toggle("burger--open");
		burgerMenu.classList.toggle("header__menu--open", isOpen);
		pageBody.classList.toggle("page__body--no-scroll", isOpen);
		burgerButton.setAttribute("aria-expanded", isOpen);
		const label = isOpen ? "Close menu" : "Open menu";
		burgerButton.setAttribute("aria-label", label);
		burgerButton.setAttribute("title", label);
	});

	const closeMenu = () => {
		burgerButton.classList.remove("burger--open");
		burgerMenu.classList.remove("header__menu--open");
		pageBody.classList.remove("page__body--no-scroll");
		burgerButton.setAttribute("aria-expanded", "false");
		burgerButton.setAttribute("aria-label", "Open menu");
		burgerButton.setAttribute("title", "Open menu");
		burgerMenu.style.right = "";
		burgerMenu.style.transition = "";
	};

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeMenu();
	});

	burgerMenu.addEventListener("click", (event) => {
		if (event.target.closest("a")) closeMenu();
	});

	document.addEventListener("click", (event) => {
		const isInsideMenu = event.target.closest(".header__menu");
		const isBurgerButton = event.target.closest(".burger");
		if (!isBurgerButton && !isInsideMenu) {
			closeMenu();
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 1100) closeMenu();
	});

	let touchStartX = 0;
	let touchStartY = 0;

	burgerMenu.addEventListener("touchstart", (event) => {
		touchStartX = event.touches[0].clientX;
		touchStartY = event.touches[0].clientY;
		burgerMenu.style.transition = "none";
	});

	burgerMenu.addEventListener("touchend", (event) => {
		const touchEndX = event.changedTouches[0].clientX;
		const touchEndY = event.changedTouches[0].clientY;
		const swipeDistanceX = touchEndX - touchStartX;
		const swipeDistanceY = touchEndY - touchStartY;
		burgerMenu.style.transition = "";
		burgerMenu.style.right = "";
		if (swipeDistanceX > 70 && Math.abs(swipeDistanceY) < swipeDistanceX) {
			closeMenu();
		}
	});

	burgerMenu.addEventListener("touchmove", (event) => {
		const currentShift = event.touches[0].clientX - touchStartX;
		const shiftX = Math.max(0, currentShift);
		burgerMenu.style.right = `-${shiftX}px`;
	});
};

export default initBurgerMenu;
