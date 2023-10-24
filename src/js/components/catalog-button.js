document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('.catalog-button');

	button.addEventListener('click', (event) => {
		event.preventDefault();
		button.classList.toggle('active');
	})
})
