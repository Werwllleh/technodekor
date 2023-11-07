document.addEventListener('DOMContentLoaded', () => {
	const mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn__left');
	const filter = document.querySelector('.modal-filter');
	const bg = document.querySelector('.modal-bg');

	mobileFilterBtns.forEach((mobileFilterBtn) => {
		mobileFilterBtn.addEventListener('click', (e) => {
			e.preventDefault();
			document.documentElement.style.overflowY = "hidden";
			filter.classList.add('active');
			bg.classList.add('active');
		});
	});
});

