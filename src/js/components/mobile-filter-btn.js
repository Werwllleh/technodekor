document.addEventListener('DOMContentLoaded', () => {
	const mobileFilterBtns = document.querySelectorAll('.mobile-filter-btn__left');
	const filter = document.querySelector('.modal-filter');
	const filterClose = document.querySelector('.modal-filter__close');
	const bg = document.querySelector('.modal-bg');

	mobileFilterBtns.forEach((mobileFilterBtn) => {
		mobileFilterBtn.addEventListener('click', (e) => {
			e.preventDefault();
			document.body.classList.add('noscroll');
			filter.classList.add('opened');
			bg.classList.add('active');
		});
	});

	bg.addEventListener( 'click', (e) => {
		document.body.classList.remove('noscroll');
		filter.classList.remove('opened')
		bg.classList.remove('active');
	})

	filterClose.addEventListener('click', (e) => {
		document.body.classList.remove('noscroll');
		filter.classList.remove('opened')
		bg.classList.remove('active');
	})


});

