document.addEventListener('DOMContentLoaded', () => {

	const modalCloseButtons = document.querySelectorAll('.modal__close');
	const bg = document.querySelector('.modal-bg');


	modalCloseButtons.forEach((btn) => {
		let modalBody = btn.parentNode.parentNode.parentNode;
		btn.addEventListener('click', () => {
			if (modalBody.classList.contains('active')) {
				modalBody.classList.remove('active');
				document.documentElement.style.overflow = "auto";
				if (bg.classList.contains('active')) {
					bg.classList.remove('active');
				}
			}

		})
		// modalCloseButton.addEventListener('click', (e) => {
		// 	modalCloseButton.closest('.modal').classList.remove('opened')
		// 	document.documentElement.style.overflowY = "auto";
		// 	bg.classList.remove('active');
		// })
		//
		bg.addEventListener( 'click', (e) => {
			if (bg.classList.contains('active')) {
				document.documentElement.style.overflowY = "auto";
				btn.closest('.modal').classList.remove('active')
				bg.classList.remove('active');
			}
		})
	})


});

