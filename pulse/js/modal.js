const initSignupModal = () => {
	const modal = document.querySelector("#signup-modal");
	if (!modal) return;

	const openButtons = document.querySelectorAll(".hero__programs-item");
	const closeButton = modal.querySelector(".signup-modal__close");
	const programSelect = modal.querySelector('[name="program"]');
	const pageBody = document.querySelector(".page__body");

	const openModal = (program) => {
		if (programSelect) {
			programSelect.value = program;
			programSelect.dispatchEvent(new Event("change"));
		}

		modal.showModal();
		pageBody?.classList.add("page__body--no-scroll");
	};

	const closeModal = () => {
		modal.close();
	};

	openButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.preventDefault();

			const selectedProgram = button.dataset.program;
			openModal(selectedProgram);
		});
	});

	closeButton?.addEventListener("click", closeModal);

	modal.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal();
		}
	});

	modal.addEventListener("close", () => {
		pageBody?.classList.remove("page__body--no-scroll");
	});
};

export default initSignupModal;
