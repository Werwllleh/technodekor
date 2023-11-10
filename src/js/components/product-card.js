document.addEventListener('DOMContentLoaded', () => {

	const descriptionButtons = document.querySelectorAll('.product-card__info-about-button');

	descriptionButtons.forEach((btn) => {
		const listBlock = btn.previousElementSibling
		const list = btn.previousElementSibling.children[0]
		btn.addEventListener('click', (e) => {
			e.preventDefault();
			btn.classList.toggle('active');

			if (btn.classList.contains('active')) {
				listBlock.style.maxHeight = `${list.clientHeight}px`;
			} else {
				listBlock.style.maxHeight = 0;
			}

		})
	})

})
