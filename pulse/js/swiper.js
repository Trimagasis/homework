const initSwiper = () => {
	const slider = document.querySelector(".whey__slider");
	if (!slider) return;

	const pagination = slider.querySelector(".whey__pagination");
	if (!pagination) return;

	const breakpoint = 876;
	let swiperInstance = null;
	let resizeTimer;

	const createSwiper = () => {
		swiperInstance = new Swiper(slider, {
			loop: true,
			speed: 700,
			direction: "vertical",
			initialSlide: 2,
			slidesPerView: 1,
			spaceBetween: 24,

			pagination: {
				el: pagination,
				clickable: true,

				renderBullet: (index, className) => {
					return `
						<span
							class="${className}"
							aria-label="${index + 1}"
						></span>
					`;
				},
			},
		});
	};

	const updateSwiper = () => {
		const shouldEnableSwiper = window.innerWidth > breakpoint;

		if (shouldEnableSwiper && !swiperInstance) {
			createSwiper();
		}

		if (!shouldEnableSwiper && swiperInstance) {
			swiperInstance.destroy(true, true);
			swiperInstance = null;
		}
	};

	updateSwiper();

	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			updateSwiper();
		}, 150);
	});
};

export default initSwiper;
