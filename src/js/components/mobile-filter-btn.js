document.addEventListener('DOMContentLoaded', () => {
	const mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn__left');
	const filter = document.querySelector('.filter');
	const filterCLose = document.querySelector('.filter__close');
	const bg = document.querySelector('.modal-bg');


	if (filter && filterCLose) {
		mobileFilterBtns.forEach((btn) => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				filter.classList.add('active')
				document.documentElement.style.overflowY = "hidden";
				// filter.classList.add('active');
				bg.classList.add('active');
			});
		});

		filterCLose.addEventListener('click', (e) => {
			filter.classList.remove('active')
			bg.classList.remove('active');
			document.documentElement.style.overflowY = "auto";
		});

		bg.addEventListener('click', (e) => {
			filter.classList.remove('active')
			bg.classList.remove('active');
			document.documentElement.style.overflowY = "auto";
		});
	}


});

