document.addEventListener('DOMContentLoaded', () => {

	const modalCloseButtons = document.querySelectorAll('.modal__close');
	const bg = document.querySelector('.modal-bg');


	modalCloseButtons.forEach((modalCloseButton) => {
		modalCloseButton.addEventListener('click', (e) => {
			modalCloseButton.closest('.modal').classList.remove('opened')
			// document.html.classList.remove('noscroll');
			// document.html.style.overflowY = 'auto';
			document.documentElement.style.overflowY = "auto";
			bg.classList.remove('active');
		})

		bg.addEventListener( 'click', (e) => {
			// document.html.classList.remove('noscroll');
			// document.html.style.overflowY = 'auto';
			document.documentElement.style.overflowY = "auto";
			modalCloseButton.closest('.modal').classList.remove('opened')
			bg.classList.remove('active');
		})
	})


});

