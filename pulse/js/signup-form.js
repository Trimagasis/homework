const initSignupForm = () => {
	const form = document.querySelector(".signup-modal__form");
	if (!form) return;

	const status = form.querySelector(".signup-modal__status");
	if (!status) return;
	const storageKey = "pulse-signup-form";

	const saveForm = () => {
		const formData = new FormData(form);
		const savedData = Object.fromEntries(formData);

		localStorage.setItem(storageKey, JSON.stringify(savedData));
	};

	const restoreForm = () => {
		const savedData = localStorage.getItem(storageKey);

		if (!savedData) return;

		const formData = JSON.parse(savedData);

		Object.entries(formData).forEach(([name, value]) => {
			const field = form.elements[name];

			if (field) {
				field.value = value;
			}
		});
	};

	form.addEventListener("input", () => {
		status.textContent = "";
		saveForm();
	});

	form.addEventListener("change", saveForm);

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		status.textContent = "Your application has been submitted!";

		localStorage.removeItem(storageKey);
		form.reset();
	});

	restoreForm();
};

export default initSignupForm;
